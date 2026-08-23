// SPDX-License-Identifier: AGPL-3.0-only
// Copyright 2026-present the Unsloth AI Inc. team. All rights reserved. See /studio/LICENSE.AGPL-3.0

/** Whether Xet cannot run here, from the settings read or, if that failed, the Hub's capabilities.
 *
 * Only a definite no greys the option out. A settings read that failed leaves the field undefined,
 * and reading that as "available" is how a machine with no hf_xet gets offered Xet anyway.
 */
export function xetIsUnavailable(
  fromSettings: boolean | null | undefined,
  fromCapabilities: boolean | null | undefined,
): boolean {
  return (fromSettings ?? fromCapabilities) === false;
}
