var Image = new Array("images/geico_slide2.jpg","images/geico_slide2a.jpg","images/geico_slide2aa.jpg","images/geico_slide1.jpg","images/geico_slide2b.jpg","images/geico_slide3.jpg","images/geico_slide4.jpg","images/geico_slide5.jpg","images/geico_slide6.jpg","images/geico_slide8.jpg","images/geico_slide9.jpg","images/geico_slide11.jpg");

    var Image_Number = 0;
    var Image_Length = Image.length - 1



    function change_image(num){

      Image_Number = Image_Number + num;

      if (Image_Number > Image_Length){

        Image_Number = 0;

      }

      if (Image_Number < 0){

        Image_Number = Image_Length;

      }

      document.slideshow.src = Image[Image_Number];



      if(Image_Number == Image_Length){
        document.getElementById('next').style.display = 'none';
      }
      else {
        document.getElementById('next').style.display = 'block';
      }

      if(Image_Number == 0){

        document.getElementById('previous').style.display = 'none';
      }
      else {
        document.getElementById('previous').style.display = 'block';
      }




    }

    function auto() {

      setInterval("change_image(1)", 1000);

    }