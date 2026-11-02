# subscriber Abstract
Subscriber stores one newsletter signup: an email address captured from the footer.

## Rules
- Anyone may create a subscriber (the footer has no sign-in); nobody may read, update or remove one.
- The stored email is trimmed and validated as an email address; an invalid address throws `subscriber.error.invalidEmail`.
- Removal is soft: a removed subscriber keeps its row with `removedAt` set.
