# `.claude/` configuration notes

`settings.json` must be **strict JSON** (Claude Code's `/doctor` parses it as
plain JSON, so `//` comments are not allowed). The annotations that used to live
as inline comments are kept here instead.

## `permissions.deny` rationale

| Rule                        | Reason                               |
| --------------------------- | ------------------------------------ |
| `Bash(git add .)`           | 意図しないファイルのステージング防止 |
| `Bash(git add -A)`          | 同上                                 |
| `Bash(git push -f *)`       | 強制プッシュ防止                     |
| `Bash(git reset --hard *)`  | 変更の破棄防止                       |
| `Bash(git checkout .)`      | 変更の破棄防止                       |
| `Bash(git clean -f *)`      | 追跡外ファイルの削除防止             |
| `Bash(git -C *)`            | 他ディレクトリでの操作防止           |
| `Bash(npm publish *)`       | 意図しないパッケージ公開防止         |
| `Read(~/.ssh/**)`           | SSH鍵                                |
| `Read(~/.aws/**)`           | AWS認証情報                          |
| `Read(~/.config/gcloud/**)` | GCP認証情報                          |
