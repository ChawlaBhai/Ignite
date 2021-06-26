// resizing image
export const smallImage = (imagePath, size) => {
	console.log(imagePath);
	const image =
		imagePath !== null
			? imagePath.match(/media\/screenshots/)
				? imagePath.replace(
						"/media/screenshots/",
						`/media/resize/${size}/-/screenshots/`
				  )
				: imagePath.replace(
						"/media/games/",
						`/media/resize/${size}/-/games/`
				  )
			: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png";
	return image;
};
