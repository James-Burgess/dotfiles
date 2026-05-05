from kivy.app import App
from kivy.uix.gridlayout import GridLayout
from kivy.uix.label import Label
from kivy.uix.button import Button
from kivy.uix.popup import Popup
from kivy.core.window import Window
from kivy.uix.widget import Widget


class Alert(Popup):
    def __init__(self, title, message, **kwargs):
        super(Alert, self).__init__(**kwargs)
        Window.set_title('Alert')
        self.title = title
        self.auto_dismiss = False

        content = Button(text=message)
        self.add_widget(content)
        content.bind(on_release=self.dismiss)

        self._keyboard = Window.request_keyboard(
            self._keyboard_closed, self, 'text')
        if self._keyboard.widget:
            # If it exists, this widget is a VKeyboard object which you can use
            # to change the keyboard layout.
            pass
        self._keyboard.bind(on_key_down=self._on_keyboard_down)

    def _keyboard_closed(self):
        print('My keyboard have been closed!')
        self._keyboard.unbind(on_key_down=self._on_keyboard_down)
        self._keyboard = None

    def _on_keyboard_down(self, keyboard, keycode, text, modifiers):
        # Keycode is composed of an (integer, string)

        # quit if space or q
        if keycode[1] == 'q':
            self.dismiss()

        # If we hit escape, release the keyboard
        if keycode[1] == 'escape':
            keyboard.release()

        # Return True to accept the key. Otherwise, it will be used by
        # the system.
        return True


    def dismiss(self, *args, **kwargs):
        print('clicked')
        Window.close()


if __name__ == '__main__':
        from kivy.base import runTouchApp
        runTouchApp(Alert(title="Battery Warning Alert", message="Swipe or Hit Q to escape"))
