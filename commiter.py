from os import system as s
# Infinite loop for infinite commits to git.
while True:
    k=1
    while(k==1):
        msg = input("Commit message?\n")
        if(msg ==""):
            k = 1
        else:
            k = 0
    s(f"git add .")
    s(f"git commit -m \"{msg}\"")
    s("git push")
    print(msg)