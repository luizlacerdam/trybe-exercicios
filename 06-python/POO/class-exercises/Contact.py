class Contact:
    def __init__(self, name: str, email: str) -> None:
        self.name = name
        self.email = email

class ContactList:
    def __init__(self, contacts: list, favorites: list) -> None:
        self.contacts = contacts
        self.favorites = favorites

    def add_contact(self, contact: Contact):
        self.contacts.append(contact)
    
    def remove_contact(self, contact: Contact):
        if contact not in self.contacts:
            raise LookupError('Contact not in list')
        self.contacts.remove(contact)

    def add_to_favorites(self, contact: Contact):
        if contact not in self.contacts:
            raise LookupError('Contact not in list')
        self.favorites.append(contact)

    def remove_from_favorites(self, contact: Contact):
        if contact not in self.contacts:
            raise LookupError('Contact not in list')
        self.favorites.remove(contact)

lista = ContactList([], [])
contact1 = Contact('John', 'john@email.com')
contact2 = Contact('Jane', 'jane@email.com')

lista.add_contact(contact1)
lista.remove_contact(contact2)