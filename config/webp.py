from sys import modules, platform



webp_download_repository = "https://storage.googleapis.com/downloads.webmproject.org/releases/webp/index.html"
sys_platform_value = ''
dict_sys_platform_value = {"darwin":"MAC OS X", "cygwin":"Windows / Cygwin", "win32":"Windows","linux": "Linux Distribution"}
LINKTOCLICK = None
LibWebPVersion = "1.1.1"
build_webp_from_source = {   "darwin":[ "port self update", " sudo port selfupdate", "install dependencies", " sudo port install jpeg libpng tiff giflib",],
"cygwin":["The most recent version of the Cygwin DLL is {LINKTOCLICK}",],
"win32":["download then extract file then run the following f-string in windows cli", "nmake /f Makefile.vc CFG=release-static RTLIBCFG=static OBJDIR=output",],
"linux": [" sudo apt-get install libjpeg-dev libpng-dev libtiff-dev libgif-dev",]}

def python_module_check():
    if module['PIL']:
        check_system_platform()

def check_system_platform():
    sys_platform_value = platform
def post_system_check_build():
    F" tar xvzf libwebp-{LibWebPVersion}.tar.gz"
    f"cd libwebp-{LibWebPVersion}"
    f"./configure"
    f"make"
    f"sudo make install"




    # CLI for linux/mac to convert all files to webp
    # $ for F in *.jpg; do cwebp $F -o `basename ${F%.jpg}`.webp; done
    # CLI for Windows to convert all files to webp
    # > for /R . %I in (*.jpg) do ( cwebp.exe %I -o %~fnI.webp )
    # CLI to convert from webp to other formats
    # f "dwebp {image}.webp -o {image}.png"
    # cli to convert files into webp format.
    # f"cwebp -q {70} {picture_with_alpha}.png -o {picture_with_alpha}.webp"
    # -q is a float specifying quality rating for new photo Higher numbers mean greater compression and less immage quality.
    # -z integer to turn lossless compression on defaul to 6, 9 is fast but larger file size. Using it with -m wil invalidate the effect of -z.
    # -preset string
    # Specify a set of pre-defined parameters to suit a particular type of source material. Possible values are: default, photo, picture, drawing, icon, text.
    # Since -preset overwrites the other parameters' values (except the -q one), this option should preferably appear first in the order of the arguments.
    # WebP is bitstream-compatible with VP8 and uses 14 bits for width and height. The maximum pixel dimensions of a WebP image is 16383 x 16383.
    # Consistent with the VP8 bitstream, lossy WebP works exclusively with an 8-bit Y'CbCr 4:2:0 (often called YUV420) image format. Please refer to Section 2, "Format Overview" of RFC 6386, VP8 Data Format and Decoding Guide for more detail.

    # Lossless WebP works exclusively with the RGBA format. See the WebP Lossless Bitstream specification.
    #     #//javascript version
    # // check_webp_feature:
    # //   'feature' can be one of 'lossy', 'lossless', 'alpha' or 'animation'.
    # //   'callback(feature, result)' will be passed back the detection result (in an asynchronous way!)
    # function check_webp_feature(feature, callback) {
    #     var kTestImages = {
    #         lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
    #         lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
    #         alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
    #         animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
    #     };
    #     var img = new Image();
    #     img.onload = function () {
    #         var result = (img.width > 0) && (img.height > 0);
    #         callback(feature, result);
    #     };
    #     img.onerror = function () {
    #         callback(feature, false);
    #     };
    #     img.src = "data:image/webp;base64," + kTestImages[feature];
    # }
    # WebM does not currently incorporate all the compression techniques from WebP. As a result, this image compresses significantly better with WebP than the alternatives:

    # GIF (85 KB)
    # WebM with alpha (32 KB)
    # Lossless animated WebP (5 KB) 4

