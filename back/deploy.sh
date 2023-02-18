docker build -t markstav/valerkino-back .
docker tag markstav/valerkino-back markstav/valerkino-back:$1
docker tag markstav/valerkino-back markstav/valerkino-back:latest
docker push markstav/valerkino-back:$1
docker push markstav/valerkino-back:latest
