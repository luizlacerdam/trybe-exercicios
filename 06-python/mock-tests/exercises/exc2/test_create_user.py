from faker import Faker


def create_user(name, email):

    return {
        "first_name": name.split()[0],
        "last_name": name.split()[-1],
        "email": email,
        "email_domain": email.split("@")[-1],
    }


def test_create_user():
    fake_email = Faker().email()
    fake_name = Faker().name()

    res = create_user(fake_name, fake_email)

    assert fake_name.startswith(res["first_name"])
    assert fake_name.endswith(res["last_name"])
    assert res["email"] == fake_email
    assert fake_email.endswith(res["email_domain"])
