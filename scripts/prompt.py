import gi

gi.require_version("Gtk", "3.0")
from gi.repository import Gtk


class UserPrompt(Gtk.Dialog):
    def __init__(self, contents="Blank Dialog"):
        super().__init__(title="dialog", flags=0)
        self.add_buttons(
            Gtk.STOCK_CANCEL, Gtk.ResponseType.CANCEL, Gtk.STOCK_OK, Gtk.ResponseType.OK
        )

        self.set_default_size(150, 100)

        label = Gtk.Label(label=contents)

        box = self.get_content_area()
        box.add(label)
        self.show_all()


def show_prompt(message):
    dialog = UserPrompt(message)
    response = dialog.run()
    response = response == Gtk.ResponseType.OK
    dialog.destroy()
    return response


if __name__ == "__main__":
    from argparse import ArgumentParser

    parser = ArgumentParser()
    parser.add_argument("message",
                        help="message to dispaly in the prompt wrapped in \" \" ")

    args = parser.parse_args()
    show_prompt(args.message)
