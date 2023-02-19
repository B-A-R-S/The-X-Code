import socket
import threading
import tkinter as tk                    ##this is required modules
from tkinter import scrolledtext
from tkinter import messagebox

HOST = '127.0.0.5'
PORT = 1224

BLACK = '#000000'
BLUE = '#0000FF'
LIGHT_BLUE = '#ADD8E6'
GRAY ='#A9A9A9'
LIGHT_GREEN ='#B8D8BE'
OCEAN_BLUE = '#464EB8'
WHITE = "white"
FONT = ("Helvetica", 17)
BUTTON_FONT = ("Helvetica", 15)
SMALL_FONT = ("Helvetica", 13)


client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

def add_msg(msg):
    msg_box.config(state=tk.NORMAL)
    msg_box.insert(tk.END, msg + '\n')
    msg_box.config(state=tk.DISABLED)

def connect():

   
    try:               # try except block

       
        client.connect((HOST, PORT))         # Connect to the server
        print("Successfully connected to server")
        add_msg("[SERVER] Successfully connected to the server")
    except:
        messagebox.showerror("Unable to connect to server", f"Unable to connect to server {HOST} {PORT}")

    username = uName_textbox.get()
    if username != '':
        client.sendall(username.encode())
    else:
        messagebox.showerror("Invalid username", "Username cannot be empty")

    threading.Thread(target=attend_messages_from_server, args=(client, )).start()

    uName_textbox.config(state=tk.DISABLED)
    uName_btn.config(state=tk.DISABLED)

def send_msg():
    msg = msg_textbox.get()
    if msg != '':
        client.sendall(msg.encode())
        msg_textbox.delete(0, len(msg))
    else:
        messagebox.showerror("Empty message", "Message cannot be empty")

root = tk.Tk()
root.geometry("450x600")
root.title("Messenger Client")
root.resizable(False, False)

root.grid_rowconfigure(0, weight=1)
root.grid_rowconfigure(1, weight=4)
root.grid_rowconfigure(2, weight=1)

top_frame = tk.Frame(root, width=400, height=100, bg=BLACK)
top_frame.grid(row=0, column=0, sticky=tk.NSEW)

middle_frame = tk.Frame(root, width=600, height=400, bg=BLUE)
middle_frame.grid(row=1, column=0, sticky=tk.NSEW)

bottom_frame = tk.Frame(root, width=600, height=100, bg=BLACK)
bottom_frame.grid(row=2, column=0, sticky=tk.NSEW)

uName_label = tk.Label(top_frame, text="Enter username:", font=FONT, bg=BLACK, fg=WHITE)
uName_label.pack(side=tk.LEFT, padx=10)

uName_textbox = tk.Entry(top_frame, font=FONT, bg=BLUE, fg=WHITE, width=10)
uName_textbox.pack(side=tk.LEFT)

uName_btn = tk.Button(top_frame, text="JOIN ME", font=BUTTON_FONT, bg=LIGHT_GREEN, fg=BLACK, command=connect)
uName_btn.pack(side=tk.LEFT, padx=15)

msg_textbox = tk.Entry(bottom_frame, font=FONT, bg=BLUE, fg=WHITE, width=26)
msg_textbox.pack(side=tk.LEFT, padx=10)

msg_btn = tk.Button(bottom_frame, text="Send", font=BUTTON_FONT, bg=LIGHT_GREEN, fg=BLACK, command=send_msg)
msg_btn.pack(side=tk.LEFT, padx=10)

msg_box = scrolledtext.ScrolledText(middle_frame, font=SMALL_FONT, bg=LIGHT_BLUE, fg=BLACK, width=67, height=26.5)
msg_box.config(state=tk.DISABLED)
msg_box.pack(side=tk.TOP)


def attend_messages_from_server(client):

    while 1:

        msg = client.recv(2048).decode('utf-8')
        if msg != '':
            username = msg.split("~")[0]
            content = msg.split('~')[1]

            add_msg(f"[{username}] {content}")
            
        else:
            messagebox.showerror("Error", "Message recevied from client is empty")

# main function
def main():

    root.mainloop()
    
if __name__ == '__main__':
    main()