function displayImage(input) {
    var file = input.files[0];
    var profilePicture = document.getElementById('profilePicture');
    var profilePictureContainer = document.getElementById('profilePictureContainer');

    if (file) {
        var reader = new FileReader();

        reader.onload = function(e) {
            profilePicture.src = e.target.result;
            profilePictureContainer.style.display = 'block';
        }

        reader.readAsDataURL(file);
    } else {
        profilePictureContainer.style.display = 'none';
    }
}
