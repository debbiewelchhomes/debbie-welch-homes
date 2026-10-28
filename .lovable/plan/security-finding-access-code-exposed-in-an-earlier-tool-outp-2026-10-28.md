# Security finding: access code exposed in an earlier tool output

Read-only investigation. In this summary, credential values and URLs are omitted.

## What was exposed (confirmed)
- During the handoff pass, a command that listed the project's code-storage address printed the full address. That address included an embedded access token.
- **Type and owner:** the token's own header fields (not the signature) identify it as a short-lived git access token issued by **Lovable**. It covers only this project's code storage, with read and write permission. It belongs to Lovable's internal code-storage connection. It is **Lovable-managed, not customer-managed**: it is not one of Debbie's secrets, not a backend key, and not a GitHub, Resend, Jivo or any other service credential.
- **Lifetime:** issued Oct 28, 2026 at 08:08:59 UTC. It expires the same day at 20:03:59 UTC, about 12 hours later. It was **still active** at the time of this check (08:15 UTC), until expiry or revocation.

## Where it appeared
- **Confirmed:** in the agent's internal command output for that one call, and in the sandbox's temporary command logs (16 log files contain the storage address).
- **Confirmed absent:** none of the project files, docs, the maintenance guide or code contain it (0 matches outside the git folder). It was not written into any deliverable.
- **Unverified:** I can't check Lovable's server-side logs, or whether the internal transcript is visible to anyone else. I didn't repeat the token in any chat message.
- **Unverified:** whether anything used the token. I have no way to view code-storage access logs.

## Risk
Low to moderate and time-limited. Anyone holding the token could read or change this project's code until 20:03 UTC today. It gives no access to the database, email, accounts or other projects.

## Safe next steps (none performed)
1. Debbie does nothing with her own secrets: no Project Settings → Secrets value needs rotating, because none was exposed.
2. Simplest remediation: let the token expire at 20:03:59 UTC today. Before then, Lovable can revoke it early. A plain one-line request is enough: "an internal code-storage git token for this project was printed in agent tool output on Oct 28; please revoke it early."
3. After expiry, review the project's version history for any changes Debbie or the agent didn't make between 08:09 and 20:04 UTC.
4. Process fix for future agents: never list git remotes; record the code revision with log-only commands.

No code, secrets, accounts, integrations or publication state were changed.
