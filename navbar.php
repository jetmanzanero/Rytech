<!-- navbar.php -->
<?php
    $current_page = basename($_SERVER['PHP_SELF']);
?>

<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="shop.html">Rytech Solutions</a>
        </div>
        <div class="collapse navbar-collapse" id="navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li class="<?= $current_page == 'realme.php' ? 'active' : '' ?>"><a href="realme.php">Realme</a></li>
                <li class="<?= $current_page == 'technopova.php' ? 'active' : '' ?>"><a href="technopova.php">TechnoPova</a></li>
                <li class="<?= $current_page == 'vivo.php' ? 'active' : '' ?>"><a href="vivo.php">Vivo</a></li>
                <li class="<?= $current_page == 'infinix.php' ? 'active' : '' ?>"><a href="infinix.php">Infinix</a></li>
                <li><a href="#"><span class="fa fa-sign-in"></span> Login</a></li>
            </ul>
        </div>
    </div>
</nav>
