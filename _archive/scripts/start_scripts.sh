#!/usr/bin/env bash
python /home/jimmy/dotfiles/scripts/batmon.py > /tmp/batmon_log.txt 2>&1 &
python /home/jimmy/dotfiles/scripts/i3-cycle-focus.py --history 2 --ignore-floating > /tmp/focus_log.txt 2>&1 &
