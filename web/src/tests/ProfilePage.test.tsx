import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ProfilePage } from "../features/profile/ProfilePage";

// ---- mocks ----
const navigateMock = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

// Mock SoftCard to avoid styling/layout complexity
vi.mock("../../components/SoftCard", () => ({
  SoftCard: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="soft-card">{children}</div>
  ),
}));

vi.mock("../../lib/api", () => ({
  apiFetch: vi.fn().mockResolvedValue({
    data: {
      ok: true,
      user: {
        first_name: "John",
        last_name: "Doe",
        student_id: "12345",
        email: "john@oshu.edu",
      },
    },
  }),
}));

describe("ProfilePage", () => {
  beforeEach(() => {
    navigateMock.mockClear();
  });

  it("renders the user name and handle", async () => {
    render(<ProfilePage />);

    expect(await screen.findByText("John Doe")).toBeTruthy();
    expect(await screen.findByText("@john")).toBeTruthy();
  });

  it("renders all profile settings items", async () => {
    render(<ProfilePage />);

    const settingsItems = [
      "Devices",
      "Notifications",
      "Appearance",
      "Language",
      "Privacy & Security",
      "Storage",
    ];

    await waitFor(() => {
      settingsItems.forEach((item) => {
        expect(screen.getByText(item)).toBeTruthy();
      });
    });
  });

  it("navigates back when the back button is clicked", () => {
    render(<ProfilePage />);

    fireEvent.click(screen.getByRole("button", { name: /back/i }));

    expect(navigateMock).toHaveBeenCalledWith(-1);
  });

  it("renders the edit profile button", () => {
    render(<ProfilePage />);

    expect(
      screen.getByRole("button", { name: /edit profile/i })
    ).toBeTruthy();
  });
  
});
