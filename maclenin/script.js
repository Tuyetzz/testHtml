function toggleInfo(infoId) {
    var infoDiv = document.getElementById(infoId);
    if (infoDiv.style.display === "none" || infoDiv.style.display === "") {
        infoDiv.style.display = "block"; // Hiện thông tin
    } else {
        infoDiv.style.display = "none"; // Ẩn thông tin
    }
}
