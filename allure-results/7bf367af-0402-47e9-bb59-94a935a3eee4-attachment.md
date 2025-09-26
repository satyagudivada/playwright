# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e7]:
      - textbox "Username" [ref=e8]: standard_user1
      - textbox "Password" [ref=e9]: secret_sauce1
      - button "LOGIN" [active] [ref=e10] [cursor=pointer]
      - 'heading "Epic sadface: Username and password do not match any user in this service" [level=3] [ref=e11]':
        - button [ref=e12] [cursor=pointer]:
          - img [ref=e13] [cursor=pointer]
        - text: "Epic sadface: Username and password do not match any user in this service"
    - img [ref=e15]
  - generic [ref=e17]:
    - generic [ref=e18]:
      - heading "Accepted usernames are:" [level=4] [ref=e19]
      - text: standard_user
      - text: locked_out_user
      - text: problem_user
      - text: performance_glitch_user
    - generic [ref=e20]:
      - heading "Password for all users:" [level=4] [ref=e21]
      - text: secret_sauce
```