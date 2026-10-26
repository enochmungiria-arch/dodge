
import uvicorn
from contextlib import asynccontextmanager
from fastapi import FastAPI,Depends
from Routes.product import router as product_router
from Routes.member import router as member_router
from Routes.product_image import router as product_image_router
from Routes.client_order_product import router as client_order_product_router
from auth import get_current_member
from seed import seed_status

from db import Prisma



@asynccontextmanager
async def lifespan(app: FastAPI):
    await prisma.connect()
    await seed_status()
    yield
    await prisma.disconnect()



app=FastAPI(title="Amazon API", lifespan=lifespan)

app.include_router(member_router, prefix="/member", dependencies=[Depends(get_current_member)])
app.include_router(product_router, prefix="/products", dependencies=[Depends(get_current_member)])
app.include_router(product_image_router, prefix="/product_images", dependencies=[Depends(get_current_member)])
app.include_router(client_order_product_router, prefix="/client_order_product", dependencies=[Depends(get_current_member)])
app.include_router(client_order_router, prefix="/client_order", dependencies=[Depends(get_current_member)])



@app.get("/")
async def root():
    members=await prisma.member.find_many()
    print (members)

    return {"message":"API is running!"}

if __name__=="__main__":
    uvicorn.run("app:app", host="127.0.0.1", port=5000, reload=True)

