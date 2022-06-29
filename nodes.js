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
        "x": 400,
        "y": 80,
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
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "120",
        "payloadType": "num",
        "x": 130,
        "y": 60,
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
        "x": 620,
        "y": 80,
        "wires": []
    },
    {
        "id": "34f516e0dc03f1d0",
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
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "50",
        "payloadType": "num",
        "x": 110,
        "y": 120,
        "wires": [
            [
                "07bc7082d6035be7"
            ]
        ]
    }
]









export default Object.freeze(nodes, true);
