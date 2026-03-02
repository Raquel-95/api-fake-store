import { test } from "vitest";

type Risk = "LOW" | "MEDIUM" | "HIGH";

type QaTestMeta = {
  tags?: string[];       // ["@TC-10235"]
  domain?: string;       // "playground_users"
  risk?: Risk;           // "HIGH"
  endpointKey?: string;  // "GET_/users"  (recomendado formato sin espacios)
};

export function qaTest(title: string, meta: QaTestMeta, fn: () => Promise<void> | void) {
  const tags = (meta.tags ?? []).map(t => String(t).trim()).filter(Boolean);

  const domainPrefix = meta.domain ? `[DOMAIN:${meta.domain}] ` : "";
  const endpointPrefix = meta.endpointKey ? `[EP:${meta.endpointKey}] ` : "";
  const riskPrefix = meta.risk ? `[RISK:${meta.risk}] ` : "";
  const tagsPrefix = tags.length ? `[${tags.join(" ")}] ` : "";

  const testName = `${domainPrefix}${endpointPrefix}${riskPrefix}${tagsPrefix}${title}`;
  return test(testName, fn);
}
