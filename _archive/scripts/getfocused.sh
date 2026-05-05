i3-msg -t get_tree | jq --raw-output 'recurse(.nodes[]; .nodes != null) | select(.nodes[].focused).nodes | length'
