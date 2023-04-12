build:
	docker build -t mmp_landingpage_image .

run:
	docker stop mmp_landingpage_container || true && docker rm mmp_landingpage_container || true && docker run --name mmp_landingpage_container -p 3000:3000 -d -t mmp_landingpage_image 