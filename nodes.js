const nodes =
[
    {
        "id": "da2f1e7920580c91",
        "type": "tab",
        "label": "Flow 6",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "07bc7082d6035be7",
        "type": "range",
        "z": "da2f1e7920580c91",
        "minin": "0",
        "maxin": "100",
        "minout": "0",
        "maxout": "1000",
        "action": "roll",
        "round": false,
        "property": "payload",
        "name": "",
        "x": 440,
        "y": 240,
        "wires": [
            [
                "37ea90b463ef7225"
            ]
        ]
    },
    {
        "id": "37b028579fbbad34",
        "type": "inject",
        "z": "da2f1e7920580c91",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "8",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "120",
        "payloadType": "num",
        "x": 210,
        "y": 180,
        "wires": [
            [
                "07bc7082d6035be7"
            ]
        ]
    },
    {
        "id": "37ea90b463ef7225",
        "type": "debug",
        "z": "da2f1e7920580c91",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": true,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 640,
        "y": 180,
        "wires": []
    }
]










export default Object.freeze(nodes, true);
