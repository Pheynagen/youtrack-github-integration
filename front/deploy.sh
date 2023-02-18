docker build -t markstav/valerkino-front .
docker tag markstav/valerkino-front markstav/valerkino-front:$1
docker tag markstav/valerkino-front markstav/valerkino-front:latest
docker push markstav/valerkino-front:$1
docker push markstav/valerkino-front:latest
