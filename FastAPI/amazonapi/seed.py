
from db import prisma  

PENDING_STATUS={
    "id": "000000000000-0000-0000-00000000000001",
    "name": "pending",
    "description": "Order is pending and awaiting processing",
    "icon_name": "clock",
    "badge_colour": "yellow"
}

PAID_STATUS={
    "id": "000000000000-0000-0000-00000000000002",
    "name": "paid",
    "description": "Order has been paid for and is being processed",
    "icon_name": "check-circle",
    "badge_colour": "green"
}

status = [
    PENDING_STATUS,
    PAID_STATUS
]


async def seed_status():

    for single_status in status:
        seed_status = await prisma.client_status.upsert(
            where={
                "id": single_status["id"]
                   },
            data={
                "create":single_status,
                "update":{
                         "name": single_status["name"],
                         "description": single_status["description"],
                         "icon_name": single_status["icon_name"],
                         "badge_colour": single_status["badge_colour"]
                }
            },
            
        )