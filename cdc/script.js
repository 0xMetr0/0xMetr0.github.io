const terminal = document.getElementById('terminal');
const output = document.getElementById('output');
const inputContainer = document.getElementById('input-container');
let input = document.getElementById('input');
const background = document.getElementById('background');

// Background images (GIFs and final static image)
const backgroundImages = [
    'gifs/join.gif',
    'gifs/hands.gif',
    'gifs/phone.gif',
    'gifs/back.gif'
];
const isValidRelativePath = (path) => {
    return /^\.\.?\/?[a-zA-Z0-9/_-]+\.html$/.test(path);
};
let currentBackgroundIndex = 0;


function addOutputLine(text, isHTML = false) {
    const line = document.createElement('div');
    line.className = 'output-line';
    
    if (isHTML) {
        line.innerHTML = text;
    } else {
        line.textContent = text;
    }
    
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}
const ALLOWED_BACKGROUNDS = [
    'gifs/join.gif',
    'gifs/hands.gif',
    'gifs/phone.gif',
    'gifs/back.gif'
];

function simulateStartupSequence() {
    const startupLines = [
        "Initializing system...",
        "Loading kernel...",
        "Checking hardware compatibility...",
        "Mounting file systems...",
        "Initializing SMBv1 connections...",
        "Polishing the pixels...",
        "Unleashing the cyber-gremlins...",
        "Feeding the server gremlins...",
        "Recalibrating coffee intake...",
        "Synchronizing with the lunar cycle...",
        "Untangling spaghetti code...",
        "Consulting the digital oracle...",
        "Channeling the ghost in the machine...",
        "Initializing rubber duck debugging protocol...",
        "Initializing user interface...",
        "Loading terminal application...",
        "Loading TeamViewer.rat...",
        "Loading device drivers...",
        "Configuring system parameters...",
        "Initializing virtual environment...",
        "Watching the watchers...",
        "Loading user preferences...",
        "Establishing database connection...",
        "Optimizing system performance...",
        "Checking for software updates...",
        "Loading command modules...",
        "Configuring network protocols...",
        "Connecting to Active Directory as Guest...",
        "Downloading more RAM...",
        "Establishing secure connection...",
        "Terminal ready. Welcome!"
    ];

    let lineIndex = 0;
    const interval = setInterval(() => {
        addOutputLine(startupLines[lineIndex]);
        lineIndex++;
        if (lineIndex >= startupLines.length) {
            clearInterval(interval);
            setTimeout(() => {
                addOutputLine("\nTrailsOS v1.201");
                addOutputLine("Type 'help' for a list of commands.\n\n\n");
                inputContainer.style.display = 'flex';
                input.focus();
            }, 1000);
        }
    }, 200);
}



const content = {
    about: "This website mimics a secure terminal interface with commands!\nIt was created as a fun and unique way to present useful links, famous manifestos, and hopefully future writeups.\nThe manifesto section of this site was created because I believe they are important cultural touchstones for cybersecurity. Their writings do not necessarily represnt my beliefs or deminor.",
    contact: "Contact Information:\nEmail: maxcasson339@gmail.com"
};

const links = {
    osint: "OSINT Links:\n- https://osintframework.com/ (OSINT Framework)\n- https://www.fastpeoplesearch.com (FastPeopleSearch)\n- https://geospy.web.app/ (GeoSpy AI)",
    redteam: "Red Team Links:\n- https://orange-cyberdefense.github.io/ocd-mindmaps/ (AD Attack Mindmap)\n- https://github.com/tanc7/hacking-books/tree/master (Free hacking books)\n- https://github.com/mandiant/commando-vm (Windows Hacking Enviroment)\n- https://twitter.com/pr0xylife/status/1598410732516802563 (HTML Smuggling with Mouse Movement Listener)\n- https://book.hacktricks.xyz/ (Hacktricks)\n- https://wadcoms.github.io (AD Attack Cheatsheet)\n- https://gtfobins.github.io (Unix local Sec Bypass)\n- https://unprotect.it/ (Evasion Techniques Search)\n- https://lolbas-project.github.io (Win Bypass With Binary)\n- https://www.loldrivers.io/ (Win Bypass With Drivers)\n- https://www.revshells.com/ (Reverse Shell Generator)\n- https://github.com/CravateRouge/bloodyAD/tree/main (AD privilege escalation )",
    powershell: "Powershell Links:\n- https://github.com/TonyPhipps/Meerkat (Forensic Powershell Module)\n- https://github.com/mattifestation/PowerShellArsenal (PowerShell tools for reverse engineering)\n- https://github.com/mantvydasb/RedTeaming-Tactics-and-Techniques/ (Great posh Goodies), https://github.com/hotvulcan/Thanos.sh (Delete Half Your Files Randomly)\n- https://github.com/Hackstur/JokerShell (Instant Prank Repo)",
    lockpicking: "https://archive.org/details/visual-guide-to-lockpicking (Visual Guide to Lock Picking)\n- https://archive.org/details/CIA_Lock_Picking_Field_Operative_Training_Manual/page/n1/mode/2up (CIA Lock Picking Field Manual)\n- https://archive.org/details/little-black-book-of-lockpicking-lock-opening-and-bypass-techniques-for-security-professionals (Little Black Book of Lockpicking)\n https://www.art-of-lockpicking.com/ (Lockpicking Community)\n- https://archive.org/details/carl-hammer-tactics-and-techniques-for-bypassing-alarms-and-defeating-locks (Cover Says It)",
    funwindows: "Fun Windows Links:\n- https://www.tiraniddo.dev/2017/08/the-art-of-becoming-trustedinstaller.html?m=1 (Becoming Trusted Installer)\n- https://www.bleepingcomputer.com/news/microsoft/windows-downdate-tool-lets-you-unpatch-windows-systems/ (Windows Unpatcher)\n https://archive.org/details/nt351.889 (Windows NT Source Code)\n- https://github.com/ZaDarkSide/ArrangeByPenis (Desktop Icon Arranger)"
};  

const manifestos = {
    mentor: "File: archives/7/p7_0x03_Hacker's Manifesto_by_The Mentor.txt\n==Phrack Inc.==\nVolume One, Issue 7, Phile 3 of 10\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\nThe following was written shortly after my arrest...\n\/\The Conscience of a Hacker/\/\nby\n+++The Mentor+++\nWritten on January 8, 1986\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\nAnother one got caught today, it's all over the papers. 'Teenager\nArrested in Computer Crime Scandal', 'Hacker Arrested after Bank Tampering'...\nDamn kids.  They're all alike.\nBut did you, in your three-piece psychology and 1950's technobrain,\never take a look behind the eyes of the hacker?  Did you ever wonder what\nmade him tick, what forces shaped him, what may have molded him?\nI am a hacker, enter my world...\nMine is a world that begins with school... I'm smarter than most of\nthe other kids, this crap they teach us bores me...\nDamn underachiever.  They're all alike.\nI'm in junior high or high school.  I've listened to teachers explain\nfor the fifteenth time how to reduce a fraction.  I understand it.  'No, Ms.\nSmith, I didn't show my work.  I did it in my head...'\nDamn kid.  Probably copied it.  They're all alike.\nI made a discovery today.  I found a computer.  Wait a second, this is\ncool.  It does what I want it to.  If it makes a mistake, it's because I\nscrewed it up.  Not because it doesn't like me...\nOr feels threatened by me...\nOr thinks I'm a smart ass...\nOr doesn't like teaching and shouldn't be here...\nDamn kid.  All he does is play games.  They're all alike.\nAnd then it happened... a door opened to a world... rushing through\nthe phone line like heroin through an addict's veins, an electronic pulse is\nsent out, a refuge from the day-to-day incompetencies is sought... a board is\nfound.\n'This is it... this is where I belong...'\nI know everyone here... even if I've never met them, never talked to\nthem, may never hear from them again... I know you all...\nDamn kid.  Tying up the phone line again.  They're all alike...\nYou bet your ass we're all alike...\n we've been spoon-fed baby food at\nschool when we hungered for steak...\n the bits of meat that you did let slip\nthrough were pre-chewed and tasteless.  We've been dominated by sadists, or\nignored by the apathetic.  The few that had something to teach found us will-\ning pupils, but those few are like drops of water in the desert.\nThis is our world now...\n the world of the electron and the switch, the\nbeauty of the baud.  We make use of a service already existing without paying\nfor what could be dirt-cheap if it wasn't run by profiteering gluttons, and you call us criminals.\n We explore... and you call us criminals.\n We seek after knowledge... and you call us criminals.\n We exist without skin color, without nationality, without religious bias... and you call us criminals.\nYou build atomic bombs, you wage wars, you murder, cheat, and lie to us\nand try to make us believe it's for our own good, yet we're the criminals.\nYes, I am a criminal.  My crime is that of curiosity.  My crime is\nthat of judging people by what they say and think, not what they look like.\nMy crime is that of outsmarting you, something that you will never forgive me\nfor.\nI am a hacker, and this is my manifesto.  You may stop this individual,\nbut you can't stop us all... after all, we're all alike.\n+++The Mentor+++",
    cyberpunk: "A MANIFESTO CYBERPUNK Christian As.Kirtchev translated by Auril We are the electronic minds, a group of rebels free thoughts. Cyberpunk. We live in Cyberspace, we are in all places, we have no limits. This is our manifesto. The cyberpunk manifesto.\n\nI.Cyberpunk\n1 / That's us, the Different. Technology rats, swimming in the ocean of information. \n2 / We are embarrassed, little guys from school, sitting at the last desk, in the corner of the classroom. \n3 / We are the teenager everybody considers strange.\n4 / We are studying hacking operating systems, exploring the depth of his ends.\n 5 / We grew up in the park, sitting on a bench with a laptop resting on his knees, programming the last virtual reality.\n6 / Ours is the garage, stacked with electronic junk. The soldier iron in the corner of the table near the desmontada- radius that is ours. Ours is a room with computers, printers and modems zumbeantes beeping. \n7 / We are those that see reality differently. Our point of view shows more than ordinary people can see. They only see the outside, but we see it inside. That is what we are-realistic glasses of dreamers. \n8 / We are those people almost unknown to the neighborhood. People, delivered to their own thoughts, sitting day after day before the computer, ransacking Network for something. No frequently left home alone from time to time to go to the nearby radio studio or a popular bar to meet some of the few friends we have, or to meet a client, or Camel corner ... or just to stroll. \n9 / We do not have many friends, only a few with whom we go on holiday. Everyone else we know are on the Internet, on the other side of the line. We know them from our favorite IRC channel, from newsgroups, systems we frequent: \n10 / We are those that we give a shit what others think of us, no matter what we seem or what people say about us in our absence. \n11 / Most of us live in hiding, being unknown to everybody except those who are inevitably in contact with them. \n12 / Others love publicity, they love fame. They are known in the underground world. Their names are easily heard there. But all together are one thing-we are the cyberpunk.\n\n13 / Society does not understand us, we are 'weird' and 'crazy' people in the eyes of ordinary people who live far from information and free ideas. Society denies our way of thinking a society, living, thinking and breathing in a unique way, a topic. \n14 / They despise us because we think freely, and free thinking is forbidden.\n 15 / The Cyberpunk has outer appearance, the lack of movement. The cyberpunk are people that start from normal and know what everyone knows, until the artist 'technomaniac' to the musician playing electronic music, to the superficial school.\n 16 / The Cyberpunk is no longer a genre of literature, nor is it an ordinary subculture. The cyberpunk is itself a new culture, children of the new age. A culture that unites all our common interests and views. We are united. We are the cyberpunk.\n\nII. Society\n1 / The Society which surrounds us is stuck to the conservatism and the 'everything for them,'' while covalently sinking in the quicksand of time.\n 2 / However, some stubborn refuse to believe this, the obvious is to live in a rotten society. Calls reforms that our governments use to boast, they are nothing more than a small step forward, which could be made more successfully with a jump. \n3 / People fear the new and the unknown. They prefer the old, the known and have proven themselves. They fear what may befall again. They fear losing what they already have.\n 4 / Their fear is so strong that this enemy is proclaimed revolutionary and liberal idea is a weapon. This is their mistake. \n5 / People must leave their fears behind and move on. In the sense that what little they now have will multiply in the morning. All they have to do is close your fists and feel the new; give freedom to thoughts, ideas, to words: \n6 / For centuries, generations have been educated in the same way. Ideals are what we all seek. Individuality is forgotten. People think the same way, following a model imposed on them from their youth, 'education-model' for all children; and, when someone dares defy authority, he is punished. 'This is what happens when you express your own opinion and this is different from the teacher.'\n 7 / Our society is sick and needs to be cured. The cure is a change in the system ....\n\nIII. The System\n1 / The System. With centuries old, it based on principles that are not valid today. A system that has not changed much since his birth.\n 2 / The system is wrong.\n3 / The System must impose its truth on our own to send. The government needs us to follow blindly. For this reason, we live in an informational eclipse. When people acquire more information than provided by the government, they can not distiguir what is correct and what is not. So the lie becomes a truth truth, fundamental to everything else. Thus the leaders control with lies to the ordinary people who lack the notion of what is true and follow the government blindly, believing them. \n4 / We fight to release the information. We fight for freedom of speech and press. For the freedom to express our thoughts freely, without being persecuted by the system.\n 5 / Even in the most democratic and developed countries who claim to be the cradle of free speech. Misinformation is one of the main weapons system. A weapon they use very well.\n 6 / La Red is the nosayuda to expand our thoughts freely. Network without barriers or limits information.\n 7 / Ours is yours, yours is ours.\n 8 / Everyone can share information, no restrictions.\n 9 / The encryption of information is our weapon. Thus the words of revolution can spread uninterrupted, and the government can only guess. \n10 / The Net is our essence, in the Network are the kings.\n 11 / Law. The world is changing, but the laws are the same. The System is not changing, only a few features to be coated with the times, but basically it's all the same.\n 12 / We need new laws. Laws, which conform to the times in which we live, the world around us. No laws built on the foundations of the past. Laws, for today, laws, that fit tomorrow.\n 13 / The laws that only relate to us. Laws that badly need revision.\n\nIV. The Vision\n1 / Some people do not care what happens in the world. They care what happens around them, in their micro-universe. \n2 / These people can only see a dark future, for they only see the life of themselves now.\n 3 / Other people, is more aware on what happens globally. They are interested in everything, in the perspective of the future, what will happen in the world. \n4 / They have a more optimistic attitude. For them the future is cleaner and nicer, it can be seen in a more mature man in the wider world. \n5 / We are in the middle. We are interested in what is happening now and what tomorrow's going to happen. \n6 / note Network, and the Network is growing and becoming wider.\n 7 / Soon everything in this world will be absorbed by the network: from the military systems to the PC at home. \n8 / But the net is the house of Anarchy.\n 9 / It can not be controlled and therein lies its power. \n10 / Every man will be independent on the Web.\n 11 / All the information is here, locked into the abyss of zeros and ones. \n12 / He who controls the network, control the information.\n 13 / We live in a mixture of past and present.\n 14 / The evil comes from man and the good of the technology.\n15 / La Red will control the little guy and we will control the net. \n16 / But if you do not control, will be controlled.\n 17 / The Information is POWER!\n\nV. Where are we?\n1 / Where are we? \n2 / We all live in a sick world, where hatred is a weapon and peace a dream. \n3 / The world grows slowly. It is hard for a Cyberpunk to live in an underdeveloped world, with some people observe their own strong development \n4 / We go ahead, and they push us back. Society suppresses us. Yes, suppress freedom of thought. With cruel education programs in schools and universities. Crushed children with their views and punish and deny any different intent. \n5 / Our kids grow educated in this old and still unchanged system. A system that tolerates no freedom of thought and demands a strict obedience to the rules ...\n 6 / We would live in a very different world than this if people do steps and no gaps. \n7 / It is difficult to live in this world cyberpunk. \n8 / It is as if time had stopped.\n 9 / We live in the right place but not at the right time.\n10 / Everything is so ordinary, people are the same, their actions are too. As if society feel an intense necesitad to live back in time. \n11 / Some try to find their own world, the world Cyberpunk, and finding it, build their world. They build their thoughts change reality, are delivered to these and live in a virtual world. Inventions, create reality: \n12 / Others, however, the world is accustomed as it is. They still live on, but not like. They have no choice but to wait for the world to remain well and continue forward \n13 / What we try to do is change the situation. We are trying to adjust the present world to our needs and views. To adapt it to its full function and forget the garbage. When we can not, we just live in this world, such as cyberpunk, no matter how difficult it is, when society fights us contrarrestaremos.\n 14 / We contruimos our worlds in Cyberspace. \n15 / A lot of zeros and ones, lots of bits of information.\n16 / We build our community. The community of cyberpunk.\n\nStates! Let us fight for our rights We are the electronic minds, a group of rebels free thoughts. Cyberpunk. We live in Cyberspace, we are in all places, we have no limits. This is our manifesto.\n\nThe cyberpunk manifesto. February 14, 1997\n\nBrought to you by The Cyberpunk Project\n\nPage last modified on 11/10/2003 16:11:23"
};

const music = {
    cybersec: "Cybersecurity & Tech Music:\n\n" +
        "• Virus - Deltron 3030\n" +
        "• Discrete - willtharapper\n" +
        "• All the Things - Dual Core\n" +
        "• CtrlAltDel - Bones\n" +
        "• Clickers - willtharapper\n" +
        "• Internet Swiping - Punchmade Dev\n" +
        "• All About the Pentiums - Weird Al\n" +
        "• Secrets from the Future - MC Frontalot\n" +
        "• Cyber Rap - Paperback\n" +
        "• Interweb - Poppy\n" +
        "• Hacker - Death Grips\n" +
        "• Technologic - Daft Punk\n" +
        "• My Computer - Adana Twins\n" +
        "• Strict Machine - Goldfrapp\n" +
        "• Positive Contact - Deltron 3030\n" +
        "• Fire - Yameii Online\n" +
        "• We Know You in Real Life - Packy\n" +
        "• Cyber Chase - Hi, I'm Chris, Roughpatch\n" +
        "• Encrypted Data - Renz 1k\n" +
        "• Zeroday - ytcracker, Dual Core, MC Frontalot\n" +
        "• NSA - Grudbump\n" +
        "• Anonymous - Dirtyphonics\n" +
        "• Sophsec - Nice Report\n" +
        "• Kingslayer - Bring Me the Horizon\n" +
        "• Hackers and Crackers - Techjeeper\n" +
        "• Spider / Crawl - Yung Innanet\n" +
        "• Virtual Insanity - Jamiroquai\n" +
        "• Work the Angles - Work the Angles\n" +
        "• Universe Man - Open Mike Eagle\n\n" +
        "Notable Artists (Full Discographies):\n" +
        "• Deltron 3030 (most tracks)\n" +
        "• ytcracker (all releases)\n" +
        "• Dual Core (all releases)"
};

const commands = {
    help: "Available commands:\n- help: Show this help message\n- list: List all available pages\n- home: Show home page\n- about: Show about page\n- links [category]: Show links (categories: osint, redteam, powershell, lockpicking, funwindows)\n- contact: Show contact information\n- music: Show cybersecurity & tech music playlist\n- clear: Clear the terminal\n- manifesto [name]: Display a famous hacker manifesto (e.g., 'manifesto mentor' or 'manifesto cyberpunk')",
    list: "Available pages:\n- home\n- about\n- links\n- contact\n- music",
    home: function() {
        const path = '../index.html';
        if (isValidRelativePath(path)) {
            window.location.href = path;
        } else {
            return 'Invalid navigation path';
        }
    },
    clear: function() {
        output.innerHTML = '';
    },
    music: function() {
        return music.cybersec;
    },
    manifesto: function(args) {
        if (args.length === 0) {
            return "Please provide an authors name. Available options: mentor, cyberpunk";
        }
        const speaker = args[0].toLowerCase();
        if (manifestos[speaker]) {
            const manifestoText = manifestos[speaker];
            const line = document.createElement('div');
            line.className = 'output-line manifesto-text';
            line.textContent = manifestoText;
            
            output.appendChild(line);
            output.scrollTop = output.scrollHeight;
            return null;
        } else {
            return `Manifesto not found for '${sanitizeInput(speaker)}'. Available options: mentor, cyberpunk`;
        }
    },
    links: function(args) {
        if (args.length === 0) {
            return "Please specify a category: osint or redteam\nOr type 'links all' to see all categories.";
        }
        const category = args[0].toLowerCase();
        if (category === 'all') {
            return Object.values(links).join('\n\n');
        } else if (links[category]) {
            return links[category];
        } else {
            return `Category '${sanitizeInput(category)}' not found. Available categories: osint, redteam`;
        }
    }
};

function sanitizeInput(input) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;
    return input.replace(reg, (match)=>(map[match]));
}

const rateLimiter = {
    lastCommand: 0,
    minDelay: 100, // ms between commands
    
    checkLimit() {
        const now = Date.now();
        if (now - this.lastCommand < this.minDelay) {
            return false;
        }
        this.lastCommand = now;
        return true;
    }
};
function linkify(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });
}
// Enhanced input processing with rate limiting
function processCommand(cmd) {
    if (!rateLimiter.checkLimit()) {
        return 'Please wait before sending another command';
    }
    
    const [command, ...args] = cmd.toLowerCase().trim().split(' ');
    
    // Special handling for the links command
    if (command === 'links') {
        if (args.length === 0) {
            return "Please specify a category: osint or redteam\nOr type 'links all' to see all categories.";
        }
        
        const category = args[0].toLowerCase();
        if (category === 'all') {
            const allLinks = Object.values(links).join('\n\n');
            addOutputLine(linkify(allLinks), true);
            return null; // Return null to prevent double output
        } else if (links[category]) {
            addOutputLine(linkify(links[category]), true);
            return null; // Return null to prevent double output
        } else {
            return `Category '${sanitizeInput(category)}' not found. Available categories: osint, redteam`;
        }
    }
    
    // Handle other commands as before
    if (commands[command]) {
        if (typeof commands[command] === 'function') {
            return commands[command](args);
        } else {
            return commands[command];
        }
    } else if (content[command]) {
        return content[command];
    } else {
        return `Command not found: ${sanitizeInput(command)}\nType 'help' for a list of commands.`;
    }
}
function changeBackground() {
    const currentImage = backgroundImages[currentBackgroundIndex];
    if (ALLOWED_BACKGROUNDS.includes(currentImage)) {
        background.style.backgroundImage = `url(${currentImage})`;
        
        currentBackgroundIndex++;
        if (currentBackgroundIndex < backgroundImages.length) {
            setTimeout(changeBackground, 
                currentBackgroundIndex === backgroundImages.length - 1 ? 5000 : 1000
            );
        }
    } else {
        console.error('Invalid background image path');
    }
}
function setupInput() {
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const cmd = this.value;
            const sanitizedCmd = sanitizeInput(cmd);
            addOutputLine(`$ ${sanitizedCmd}`);
            const result = processCommand(cmd);
            if (result) {
                addOutputLine(result);
            }
            this.value = '';
        }
    });
}
// Prevent form submission
document.addEventListener('submit', function(event) {
    event.preventDefault();
});

// Sanitize and validate input on paste
input.addEventListener('paste', function(event) {
    event.preventDefault();
    const pastedText = event.clipboardData.getData('text/plain');
    const sanitizedText = sanitizeInput(pastedText);
    document.execCommand('insertText', false, sanitizedText);
});
// Start the background transition and startup sequence
changeBackground();
simulateStartupSequence();
setupInput();