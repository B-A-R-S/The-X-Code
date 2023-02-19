import socket
import threading #this is required modules

HOST = '127.0.0.5'
PORT = 1224 
Limit = 5
active = []  #this shows current active users


def attend_messages(client, username):       # To Attend for upcoming messages from a client

    while 1:

        msg = client.recv(2048).decode('utf-8')     
        if msg != '':
            
            last_msg = username + '~' + msg
            send_msg_all(last_msg)

        else:
            print(f"The message send from client {username} is empty")



def send_msg(client, msg):         # To send message to a single client

    client.sendall(msg.encode())


#def send_msg_all(msg):             # To send any new message to all the clients 
    
    #for user in active:

        #send_msg(user[1], msg)


def c_handler(client):             # To handle client
    
   
    while 1:                 #Server will monitor any client messages with the username in them.

        username = client.recv(2048).decode('utf-8')
        if username != '':
            active.append((username, client))
            quick_msg = "SERVER~" + f"{username} added to the chat"
            send_msg_all(quick_msg)
            break
        else:
            print("Client username is empty")

    threading.Thread(target=attend_messages, args=(client, username, )).start()

    # Main function
def main():

    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)        # Creating the socket class object

    
    try:    # Creating a try catch block
    
        server.bind((HOST, PORT))                      #Send a host IP address and port to the server as the address.
        print(f"Running the server on {HOST} {PORT}")
    except:
        print(f"Unable to bind to host {HOST} and port {PORT}")

  
    server.listen(Limit)     # Set server limit

   
    while 1:                #The while loop will continue to monitor client connections.

        client, address = server.accept()
        print(f"Successfully connected to client {address[0]} {address[1]}")

        threading.Thread(target=c_handler, args=(client, )).start()


if __name__ == '__main__':
    main()
