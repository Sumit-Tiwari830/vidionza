import { dark } from "@clerk/themes";

/**
 * Dark theme for Clerk modals (sign-in, sign-up) that matches the app's color palette.
 * Uses Clerk's prebuilt `dark` theme as a base, then overrides variables to match
 * this app's `.dark` palette from `app/globals.css` with the same blue/magenta primary color.
 *
 * @see https://clerk.com/docs/guides/customizing-clerk/appearance-prop/themes
 * @see https://clerk.com/docs/guides/customizing-clerk/appearance-prop/variables
 */
export const clerkModalAppearance = {
    theme: dark,
    variables: {
        // Primary brand color - matches the app's primary color
        colorPrimary: "oklch(0.6056 0.2189 292.7172)",
        colorPrimaryForeground: "oklch(1.0000 0 0)",

        // Background and foreground colors - matches the app's dark theme
        colorBackground: "oklch(0.2077 0.0398 265.7549)",
        colorForeground: "oklch(0.9299 0.0334 272.7879)",

        // Card and surface colors - matches the app's card colors
        colorCard: "oklch(0.2573 0.0861 281.2883)",
        colorCardForeground: "oklch(0.9299 0.0334 272.7879)",

        // Input field colors - matches the app's input colors
        colorInput: "oklch(0.2827 0.1351 291.0894)",
        colorInputForeground: "oklch(0.9299 0.0334 272.7879)",

        // Secondary colors - matches the app's secondary colors
        colorSecondary: "oklch(0.2573 0.0861 281.2883)",
        colorSecondaryForeground: "oklch(0.9299 0.0334 272.7879)",

        // Muted colors for subtle elements
        colorMuted: "oklch(0.2329 0.0919 279.1398)",
        colorMutedForeground: "oklch(0.8112 0.1013 293.5712)",

        // Accent colors
        colorAccent: "oklch(0.4568 0.2146 277.0229)",
        colorAccentForeground: "oklch(0.9299 0.0334 272.7879)",

        // Border colors
        colorBorder: "oklch(0.2827 0.1351 291.0894)",

        // Shadow and ring colors
        colorRing: "oklch(0.6056 0.2189 292.7172)",

        // Typography
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",

        // Border radius to match app's design
        borderRadius: "0.625rem",
        borderRadiusSmall: "0.375rem",
        borderRadiusLarge: "0.875rem",
    },
    elements: {
        // Ensure consistent spacing and typography
        formButtonPrimary: {
            backgroundColor: "oklch(0.6056 0.2189 292.7172)",
            color: "oklch(1.0000 0 0)",
            "&:hover": {
                backgroundColor: "oklch(0.55 0.2189 292.7172)", // Slightly darker for hover state
            },
            "&:active": {
                backgroundColor: "oklch(0.50 0.2189 292.7172)", // Even darker for active state
            },
        },
        formButtonReset: {
            backgroundColor: "oklch(0.2827 0.1351 291.0894)",
            color: "oklch(0.9299 0.0334 272.7879)",
            borderColor: "oklch(0.2827 0.1351 291.0894)",
            "&:hover": {
                backgroundColor: "oklch(0.33 0.1351 291.0894)",
            },
        },
        card: {
            backgroundColor: "oklch(0.2573 0.0861 281.2883)",
            borderColor: "oklch(0.2827 0.1351 291.0894)",
        },
        headerTitle: {
            color: "oklch(0.9299 0.0334 272.7879)",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        },
        headerSubtitle: {
            color: "oklch(0.8112 0.1013 293.5712)",
        },
        socialButtonsBlockButton: {
            backgroundColor: "oklch(0.2827 0.1351 291.0894)",
            color: "oklch(0.9299 0.0334 272.7879)",
            borderColor: "oklch(0.2827 0.1351 291.0894)",
            "&:hover": {
                backgroundColor: "oklch(0.33 0.1351 291.0894)",
            },
        },
        formFieldInput: {
            backgroundColor: "oklch(0.2827 0.1351 291.0894)",
            color: "oklch(0.9299 0.0334 272.7879)",
            borderColor: "oklch(0.2827 0.1351 291.0894)",
            "&:focus": {
                borderColor: "oklch(0.6056 0.2189 292.7172)",
                boxShadow: "0 0 0 1px oklch(0.6056 0.2189 292.7172)",
            },
        },
        footerActionLink: {
            color: "oklch(0.6056 0.2189 292.7172)",
            "&:hover": {
                color: "oklch(0.55 0.2189 292.7172)",
            },
        },
    },
} as const;