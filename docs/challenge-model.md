# Logicl Challenge Model

Each challenge should have a stable identifier, prompt, answer data, difficulty, and optional explanation.

## Validation
A challenge is ready for play only when required answer data is present. User input should be normalized before comparison while preserving the original answer for display.

## Progress
The current challenge index and score should be separate values. Resetting a challenge should not accidentally reset the whole session unless the user explicitly starts a new session.
