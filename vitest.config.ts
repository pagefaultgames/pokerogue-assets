/*
 * SPDX-FileCopyrightText: 2024-2026 Pagefault Games
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { defineConfig, type ViteUserConfig } from "vitest/config";

// biome-ignore lint/style/noDefaultExport: required for vitest
export default defineConfig(() => {
  const opts = {
    test: {
      passWithNoTests: false,
      env: { TZ: "UTC" },
      isolate: false,
      testTimeout: 20_000,
      slowTestThreshold: 10_000,
      expect: {
        requireAssertions: true,
      },
      includeTaskLocation: true,
      restoreMocks: true,
      watch: false,
      name: "main",
      include: ["./test/**/*.{test,spec}.ts"],
    },
  } satisfies ViteUserConfig;

  return opts;
});
