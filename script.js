const userData = [
    { username: "@Senior_Achiever", wallet: "0xfb9FF3146EFf868fA2A94f8Cadd69A09166c3F5a", balance: 1000, lastbackup: "01/12/2024"},
    { username: "@Mr_shark", wallet: "UQDvdL42VpCqEw8oeNKw-FbMZ05GBAIFAViZtYP31hyDeND5", balance: 1000, lastbackup: "01/12/2024"},
    { username: "@muhammadshuayb", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 1000, lastbackup: "01/12/2024" },
    { username: "@Abideen", wallet: "UQDNQoCdhyERDhfTOz3Prd4AorRoyLmhrA6nKmSoxmCorM44", balance: 1000, lastbackup: "01/12/2024" },
    { username: "@AliRazaJamali", wallet: "UQDfgyZcMmODGxnjSwgEI30rhlkZtNX9mNn68wDCf0lipkHf", balance: 1000, lastbackup: "01/12/2024"},
    { username: "@Elfarooque", wallet: "UQB9o79QEdtfefi61GmJPBllo8A2w2OZ-hEQ6rhbVcyFQpby", balance: 1000, lastbackup: "01/12/2024" },
    { username: "@Abdool_kgw", wallet: "UQD7f808rEz0F1SpfJntRv3_MXRnm5y45MjcnTfySDWEy8xk", balance: 1000, lastbackup: "01/12/2024" },
    { username: "@LightMiles12", wallet: "UQBtRAI1-bU7MxEla66RtXItrxfZjcqMtyJFNIi33y_bJwv4", balance: 1000, lastbackup: "01/12/2024"},
    { username: "@slushinya", wallet: "UQBOwdk-5fjIyTYkvAh4zCXV4f1p9XRpMYdE-fTRVQPV_lwM", balance: 1000, lastbackup: "01/12/2024" },
    { username: "@$xAbbasIsmail", wallet: "UQDOTv-rraMaQgEKBWCS1_qSQhF4L3UExNZeNd86HXyA28VY", balance: 1000, lastbackup: "01/12/2024" },
    { username: "@zateman2", wallet: "UQBPlJCEeXamPFOhnIZmOv8-4zL_c8kY3Avd5myZ9VH-RGlp", balance: 1000, lastbackup: "01/12/2024" },
    { username: "@musawali", wallet: "UQDv6FRYPJpwKdU1cfJXOfkxsfOCbToUbp2GWWmjte8sNf8-", balance: 1000, lastbackup: "01/12/2024" },
    { username: "amk13", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJ13", balance: 130, lastbackup: "01/12/2024" },
    { username: "amk14", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJ14", balance: 140, lastbackup: "01/12/2024" },
    { username: "amk15", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJ15", balance: 150, lastbackup: "01/12/2024" },
    { username: "amk16", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJ16", balance: 160, lastbackup: "01/12/2024" },
    { username: "amk17", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJ17", balance: 170, lastbackup: "01/12/2024" },
    { username: "amk18", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJ18", balance: 180, lastbackup: "01/12/2024" },
    { username: "amk19", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJ19", balance: 190, lastbackup: "01/12/2024" },
    { username: "amk20", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJ20", balance: 200, lastbackup: "01/12/2024" },
    { username: "amk21", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 210, lastbackup: "01/12/2024" },
    { username: "amk22", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 220, lastbackup: "01/12/2024" },
    { username: "amk23", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 230, lastbackup: "01/12/2024" },
    { username: "amk24", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 240, lastbackup: "01/12/2024" },
    { username: "amk25", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 250, lastbackup: "01/12/2024" },
    { username: "amk26", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 260, lastbackup: "01/12/2024" },
    { username: "amk27", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 270, lastbackup: "01/12/2024" },
    { username: "amk28", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 280, lastbackup: "01/12/2024" },
    { username: "amk29", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 290, lastbackup: "01/12/2024" },
    { username: "amk30", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 300, lastbackup: "01/12/2024" },
    { username: "amk31", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 310 },
    { username: "amk32", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 320 },
    { username: "amk33", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 330 },
    { username: "amk34", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 340 },
    { username: "amk35", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 350 },
    { username: "amk36", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJ36", balance: 360 },
    { username: "amk37", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 370 },
    { username: "amk38", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 380 },
    { username: "amk39", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 390 },
    { username: "amk40", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 400 },
    { username: "amk41", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 410 },
    { username: "amk42", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 420 },
    { username: "amk43", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 430 },
    { username: "amk44", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 440 },
    { username: "amk45", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 450 },
    { username: "amk46", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 460 },
    { username: "amk47", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 470 },
    { username: "amk48", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 480 },
    { username: "amk49", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 490 },
    { username: "amk50", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 500 },
    { username: "amk51", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 510 },
    { username: "amk52", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 520 },
    { username: "amk53", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 530 },
    { username: "amk54", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 540 },
    { username: "amk55", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 550 },
    { username: "amk56", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 560 },
    { username: "amk57", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 570 },
    { username: "amk58", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 580 },
    { username: "amk59", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 590 },
    { username: "amk60", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 600 },
    { username: "amk61", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 610 },
    { username: "amk62", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 620 },
    { username: "amk63", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 630 },
    { username: "amk64", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 640 },
    { username: "amk65", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 650 },
    { username: "amk66", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 660 },
    { username: "amk67", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 670 },
    { username: "amk68", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 680 },
    { username: "amk69", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 690 },
    { username: "amk70", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 700 },
    { username: "amk71", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 710 },
    { username: "amk72", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 720 },
    { username: "amk73", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 730 },
    { username: "amk74", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 740 },
    { username: "amk75", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 750 },
    { username: "amk76", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 760 },
    { username: "amk77", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 770 },
    { username: "amk78", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 780 },
    { username: "amk79", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 790 },
    { username: "amk80", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 800 },
    { username: "amk81", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 810 },
    { username: "amk82", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 820 },
    { username: "amk83", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 830 },
    { username: "amk84", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 840 },
    { username: "amk85", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 850 },
    { username: "amk86", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 860 },
    { username: "amk87", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 870 },
    { username: "amk88", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 880 },
    { username: "amk89", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 890 },
    { username: "amk90", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 900 },
    { username: "amk91", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 910 },
    { username: "amk92", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 920 },
    { username: "amk93", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 930 },
    { username: "amk94", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJX", balance: 940 },
    { username: "amk95", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJ95", balance: 950, lastbackup: "01/12/2024" },
    { username: "amk96", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJ96", balance: 960, lastbackup: "01/12/2024" },
    { username: "amk97", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJ97", balance: 970, lastbackup: "01/12/2024" },
    { username: "amk98", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJ98", balance: 980, lastbackup: "01/12/2024" },
    { username: "amk99", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJ99", balance: 990, lastbackup: "01/12/2024" },
    { username: "amk100", wallet: "UQDWoCAyIm9-pe3C0lT4Z5tweqon3rLcsPjYqnfetDJ1ygJ100", balance: 1000, lastbackup: "01/12/2024" }
];

const validUsername = "@DARKHOURSBACKUP";
const validPassword = "1234";

document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const messageDiv = document.getElementById("custom-message");

    if (!username || !password) {
        messageDiv.textContent = "Both fields are required!";
        messageDiv.style.color = "red";
    } else if (username !== validUsername || password !== validPassword) {
        messageDiv.textContent = "Invalid username or password! Please try again.";
        messageDiv.style.color = "red";
    } else {
        messageDiv.textContent = "";
        document.getElementById("login-section").style.display = "none";
        document.getElementById("search-section").style.display = "block";
    }
});

function searchUser() {
    const query = document.getElementById("search-bar").value.trim().toLowerCase();
    const userDetailsDiv = document.getElementById("user-details");
    userDetailsDiv.innerHTML = "";

    // Modify to search by exact wallet match instead of partial match
    const filteredUser = userData.find(user => user.wallet.toLowerCase() === query);

    if (filteredUser) {
        const walletFormatted = filteredUser.wallet.length > 24
            ? `${filteredUser.wallet.slice(0, 24)}<br>${filteredUser.wallet.slice(24)}`
            : filteredUser.wallet;

        userDetailsDiv.innerHTML = `
            <p><strong>Serial Number:</strong> ${userData.indexOf(filteredUser) + 1}</p>
            <p><strong>Username:</strong> ${filteredUser.username}</p>
            <p><strong>Wallet Address:</strong> ${walletFormatted}</p>
            <p><strong>Balance:</strong> ${filteredUser.balance}</p>
            <p><strong>Last Backup:</strong> ${filteredUser.lastbackup}</p>
        `;
    } else {
        userDetailsDiv.innerHTML = `<p style="color: red;">No user found with the provided wallet address.</p>`;
    }
}
