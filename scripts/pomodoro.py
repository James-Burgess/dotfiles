import PySimpleGUI as sg
import keyboard
import time


def show_break_screen():
    sg.theme('black')
    layout = [
      [sg.Text('')],
      [sg.Text('Take a moment to have a little break', size=(100, 20), font=('Helvetica', 20), pad=((50, 0), 0),  justification='center', key='text')],
      [sg.ProgressBar(1000, orientation='h', size=(100, 20), key='progbar', pad=((300, 0), 0))],
      [sg.Cancel(pad=((1450,200),0))]
    ]

    window = sg.Window('', layout, no_titlebar=True, auto_size_buttons=False, keep_on_top=True,
                       grab_anywhere=True).Finalize()
    window.Maximize()

    for i in range(100):
        event, values = window.read(timeout=100)
        if event == 'Cancel' or event == sg.WIN_CLOSED:
            break
        window['progbar'].update_bar((i * 10) + 1)

        if keyboard.is_pressed('q'):
            break

    window.close()

while True:
    time.sleep(20 * 60)
    show_break_screen()
