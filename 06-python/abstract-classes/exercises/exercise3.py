from typing import Union, Protocol, Tuple
from queue import Queue

class MessagingProtocol(Protocol):
    def send_message(self, to: str, message: str) -> bool:
        ...
    def receive_message(self) -> Union[Tuple[str, str], None]:
        ...

class InMemoryMessaging(MessagingProtocol):
    def __init__(self) -> None:
        self.messages: Queue[Tuple[str, str]] = Queue()
    def send_message(self, to: str, message: str) -> bool:
        self.messages.put((to, message))
        return True
    def receive_message(self) -> Union[Tuple[str, str], None]:
        if not self.messages.empty():
            return self.messages.get()
        return None
    
class FileMessaging(MessagingProtocol):
    def __init__(self, file: str) -> None:
        self.file = file
    def send_message(self, to: str, message: str) -> bool:
        with open(self.file, "a") as f:
            f.write(f"{to}: {message}\n")
        return True
    def receive_message(self) -> Union[Tuple[str, str], None]:
        with open(self.file, "r") as f:
            lines = f.readlines()
        if not lines:
            return None
        line = lines[0]
        with open(self.file, "w") as f:
            f.writelines(lines[1:])
        return line.split(":")[0], line.split(":")[1]
    
def main():
    in_mem = InMemoryMessaging()
    in_mem.send_message("John", "Hello")
    in_mem.send_message("Jane", "Hi")
    print(in_mem.receive_message())
    print(in_mem.receive_message())
    print(in_mem.receive_message())
    
    file = FileMessaging("messages.txt")
    file.send_message("John", "Hello")
    file.send_message("Jane", "Hi")
    print(file.receive_message())
    print(file.receive_message())
    print(file.receive_message())