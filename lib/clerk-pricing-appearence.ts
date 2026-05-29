import { dark } from "@clerk/themes";

/**
 * Dark + brand colors for `<PricingTable />` and billing checkout.
 * Uses Clerk’s prebuilt `dark` theme, then overrides variables to match
 * this app’s `.dark` palette (see `app/globals.css`) and blue/purple primary.
 *
 * @see https://clerk.com/docs/guides/customizing-clerk/appearance-prop/themes
 * @see https://clerk.com/docs/guides/customizing-clerk/appearance-prop/variables
 */
export const clerkPricingAppearance = {
    theme: dark,
    variables: {
        colorPrimary: "oklch(0.6056 0.2189 292.7172)", // Matches your --primary
        colorPrimaryForeground: "oklch(1.0000 0 0)",
        colorBackground: "oklch(0.2573 0.0861 281.2883)", // Matches your --card background
        colorForeground: "oklch(0.9299 0.0334 272.7879)", // Matches your --foreground
        colorInput: "oklch(0.2827 0.1351 291.0894)", // Matches your --input background
        colorInputForeground: "oklch(0.9299 0.0334 272.7879)",
        colorNeutral: "oklch(0.8112 0.1013 293.5712)", // Matches your --muted-foreground
    },
} as const;