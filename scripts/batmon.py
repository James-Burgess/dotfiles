import datetime
from time import sleep
import subprocess
import sys


from plyer import notification
import psutil

def msg(percent):
    notification.notify(
        title = "Warning",
        message = f"Battery is at a low level ({percent:.2f}%)",
        timeout  = 50
    )

def popup():
    result = subprocess.call(
        [f"python prompt.py 'Battery dying soon - {percent:.2f}%'"], shell=True
    )
    print("popup shown")


notification.notify(
        title = "Alert",
        message = "Batmon started",
        timeout = 50
    )


while 1:
    battery = psutil.sensors_battery()

    if not battery.power_plugged:
        if 7 < battery.percent < 15:
            msg(battery.percent)
            sleep(60)
        elif battery.percent <= 7:
            popup()
            sleep(30)
        else:
            sleep(15)
    else:
        sleep(120)
