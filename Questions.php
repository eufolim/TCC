<html>
    <head>
        <meta:iso-8859-1/>
        <!-- meta utf-8 não funciona °^° -->
        <link rel="stylesheet" href="style.css">
        <script type="text/javascript" src="script.js"></script>
    </head>
    <body>
        <header>
           <a href="" id="logo">Anime Quiz</a> 
        </header>
        <div id="mainbox">
            <div id="questionbox">
                <div id="vertical-center">
                    <p id="question">example question</p>
                </div>
            </div>
            <div id="buttonbox">
                <button type="button" onclick="test('a')">
                    <strong class="ABCD">A) </strong><b id="a">answer</b>
                </button>
                <button type="button" onclick="test('b')">
                    <strong class="ABCD">B) </strong><b id="b">answer</b>
                </button>
                <button type="button" onclick="test('c')">
                    <strong class="ABCD">C) </strong><b id="c">answer</b>
                </button>
                <button type="button" onclick="test('d')">
                    <strong class="ABCD">D) </strong><b id="d">answer</b>
                </button>
            </div>
            <div id="nivelbox">
                <p>nivel: <b id="nivel">none</b></p>
            </div>
        </div>
        <footer>
            <p>.<p>
            <script>newq()</script>
        </footer>
    </body>
</html>