var React = require("react");
var ReactDOM = require("react-dom");
var Grid = require("../components/grid.jsx");

var methods = {

    // gets photos from Flickr API and triggers rerender of carousel/grid
    getPhotos: function getPhotos(pageNumber, keyword) {
        var request = new XMLHttpRequest();

        request.open('GET', '/api/photos/' + pageNumber + "/" + keyword, true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                methods.renderGrid(data, keyword);

            }
        };

        request.send();

    },

    // identifies URLs for photos fetched from Flickr and triggers grid rerender
    getPhotoUrls: function getPhotoUrls(data) {
        var photoData = data.photos.photo;
        var urls = [];

        // for each chunk of photo data, constructs URL and pushes to array
        for (var i=0; i < photoData.length; i++) {
            var url = "https://farm" + photoData[i].farm + ".staticflickr.com/" + photoData[i].server + "/" + photoData[i].id + "_" + photoData[i].secret + "_m.jpg";

            urls.push(url);
        }

        return urls;

    },

    // renders or rerenders grid with given photo URLs
    renderGrid: function renderGrid(data, keyword) {
        var urls = methods.getPhotoUrls(data);
        var pageNumber = data.photos.page;

        // renders <Grid />
        ReactDOM.render(
          <Grid pageNumber={pageNumber} images={urls} theme={keyword} methods={methods} />,
          document.getElementById("images")
        );

    }

}

module.exports = methods;
