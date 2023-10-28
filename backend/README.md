# Backend
## UTS Pemrograman Web Lanjut
## 120140048 - Fitra lyasa

## Tech Stack

- Python 3.11.x
- Pyramind 2.0.x
- Grpcio 1.41.x
- Grpcio-tools 1.41.x
- Sqlalchemy 1.4.x
- alembic 1.7.x
- mysqlclient 2.1.x

## How to run

- Make sure you have python 3.11.x or higher installed

```bash
python3 --version
```

- Clone this repository

```bash
git clone https://github.com/fitrailyasa/uts-pwl.git
```

- Change directory

```bash
cd backend/utspwl
```

### Generate gRPC and run gRPC utspwl

- Change directory to `utspwl`

```bash
cd utspwl
```

- Make venv

```bash
python3 -m venv env
```

- Activate venv

```bash
.\env\Scripts\activate
```

- Upgrade pip and setuptools

```bash
.\env\Scripts\python.exe -m pip install --upgrade pip setuptools
```

- Install requirements

```bash
.\env\Scripts\pip.exe -e .
```

- Generate gRPC

```bash
.\env\Scripts\python.exe -m grpc_tools.protoc -I../protos --python_out=. --pyi_out=. --grpc_python_out=. ../protos/products.proto
```

- Migrate database
  note: make sure you have mysql utspwl running and your database has been created, to see what database name you should use, see `utspwl\alembic.ini`

```bash
.\env\Scripts\alembic.exe upgrade head
```

- Run gRPC utspwl

```bash
.\env\Scripts\python.exe -m utspwl
```