# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e7]:
      - textbox "Username" [ref=e8]: standard_user1
      - textbox "Password" [active] [ref=e9]: secret_sauce1
      - button "LOGIN" [ref=e10] [cursor=pointer]
    - img [ref=e11]
  - generic [ref=e13]:
    - generic [ref=e14]:
      - heading "Accepted usernames are:" [level=4] [ref=e15]
      - text: standard_user
      - text: locked_out_user
      - text: problem_user
      - text: performance_glitch_user
    - generic [ref=e16]:
      - heading "Password for all users:" [level=4] [ref=e17]
      - text: secret_sauce
```