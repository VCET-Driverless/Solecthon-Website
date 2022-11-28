from os import system as s
# Infinite loop for infinite commits to git.
while True:
    msg = input("Commit message?\n")
    s(f"git add .")
    s(f"git commit -m \"{msg}\"")
    s("git push")