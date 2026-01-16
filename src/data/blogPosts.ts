export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "mikrotik-home-lab-setup",
    title: "Building My Home Lab with MikroTik RB5009UPr+S+IN",
    excerpt: "How I set up a professional-grade home network using the MikroTik RB5009UPr+S+IN router, complete with VLANs, firewall rules, and network segmentation for hands-on CCNA practice.",
    date: "Jan 10, 2026",
    readTime: "15 min read",
    category: "Networking",
    tags: ["MikroTik", "Home Lab", "CCNA", "Networking", "RouterOS"],
    content: `
## Why I Chose the MikroTik RB5009UPr+S+IN

After completing my CCNA coursework, I realized that theory alone wasn't enough. I needed hands-on experience with real networking equipment. The MikroTik RB5009UPr+S+IN caught my attention for several reasons:

- **Enterprise-grade features** at a fraction of the cost
- **PoE output** on all 8 Gigabit ports (perfect for access points and IP cameras)
- **2.5G SFP+ port** for high-speed uplink
- **Powerful ARM processor** that handles complex routing tables and firewall rules

## Initial Setup and Configuration

The first step was connecting to the router via WinBox and securing the default configuration. Here's what I changed immediately:

### Security Hardening
- Changed default admin password
- Disabled unnecessary services (Telnet, FTP, WWW)
- Configured SSH with key-based authentication
- Set up firewall rules to protect the management interface

### VLAN Configuration

I segmented my network into multiple VLANs:

| VLAN ID | Name | Purpose | Subnet |
|---------|------|---------|--------|
| 10 | Management | Router/Switch management | 192.168.10.0/24 |
| 20 | Trusted | Personal devices | 192.168.20.0/24 |
| 30 | IoT | Smart home devices | 192.168.30.0/24 |
| 40 | Guest | Guest WiFi | 192.168.40.0/24 |
| 50 | Lab | Testing environment | 192.168.50.0/24 |

## Inter-VLAN Routing and Firewall Rules

One of the most valuable exercises was setting up proper firewall rules between VLANs. The IoT VLAN, for example, can only access the internet—not my trusted network. This mirrors real enterprise security practices.

## What I Learned

Running this home lab has been invaluable for my professional development:

1. **Practical troubleshooting skills** - When something breaks, I have to fix it
2. **Deep understanding of routing protocols** - OSPF, BGP concepts become clearer
3. **Firewall rule optimization** - Learning to balance security with usability
4. **Documentation habits** - Keeping notes on every change

## Next Steps

I'm planning to add:
- A managed switch for more advanced L2 features
- Multiple access points with centralized management
- A dedicated server for network monitoring (Zabbix/Grafana)

The MikroTik platform has been perfect for CCNA practice and beyond. If you're serious about networking, I highly recommend building your own lab.
    `,
  },
  {
    id: "pihole-adblock-server",
    title: "Setting Up Pi-hole for Network-Wide Ad Blocking",
    excerpt: "A complete guide to deploying an adblock server on your home network, filtering ads and trackers at the DNS level for all connected devices.",
    date: "Jan 5, 2026",
    readTime: "10 min read",
    category: "Home Lab",
    tags: ["Pi-hole", "DNS", "Ad Blocking", "Privacy", "Raspberry Pi"],
    content: `
## Why Network-Level Ad Blocking?

Browser extensions like uBlock Origin are great, but they only work on that specific browser. What about:
- Smart TVs with built-in ads?
- Mobile apps with intrusive advertising?
- IoT devices phoning home to tracking servers?

The answer is **DNS-level blocking** with Pi-hole.

## Hardware Options

You don't need a Raspberry Pi to run Pi-hole. In my setup, I run it as a Docker container on my home server. Here are your options:

1. **Raspberry Pi** - The classic choice, low power consumption
2. **Docker container** - Runs on any Linux server
3. **Virtual machine** - Good for testing
4. **LXC container** - Lightweight on Proxmox

## Installation on Docker

Here's my docker-compose configuration:

\`\`\`yaml
version: "3"
services:
  pihole:
    container_name: pihole
    image: pihole/pihole:latest
    ports:
      - "53:53/tcp"
      - "53:53/udp"
      - "80:80/tcp"
    environment:
      TZ: 'Africa/Nairobi'
      WEBPASSWORD: 'your-secure-password'
    volumes:
      - './etc-pihole:/etc/pihole'
      - './etc-dnsmasq.d:/etc/dnsmasq.d'
    restart: unless-stopped
\`\`\`

## Integrating with MikroTik

To make Pi-hole work network-wide, I configured my MikroTik router to:

1. **Assign Pi-hole as the DNS server** via DHCP
2. **Block external DNS requests** - Prevents devices from bypassing Pi-hole
3. **Force all DNS through Pi-hole** using NAT rules

## Blocklist Recommendations

The default blocklists are good, but I've added several more:

- **Steven Black's hosts** - Comprehensive ad/malware blocking
- **OISD** - Optimized for minimal false positives
- **Developer Dan's hosts** - Ad-serving domains

## Results

After one month of operation:

- **~35% of all DNS queries blocked**
- **Faster page load times** - No waiting for ad servers
- **Better privacy** - Trackers can't phone home
- **Happy family** - No more complaints about ads on smart TVs

## Troubleshooting Tips

1. **Whitelist when needed** - Some services break without certain domains
2. **Check the query log** - Pi-hole shows exactly what's being blocked
3. **Use conditional forwarding** - Helps with local hostname resolution

Pi-hole has become an essential part of my home network infrastructure. Combined with the MikroTik firewall rules, my network is both faster and more private.
    `,
  },
  {
    id: "ccna-journey",
    title: "CCNA Journey: From Theory to Hands-On Practice",
    excerpt: "My experience taking the CCNA course and how running a home lab with real networking hardware accelerated my learning and practical skills.",
    date: "Dec 20, 2025",
    readTime: "12 min read",
    category: "Networking",
    tags: ["CCNA", "Cisco", "Certification", "Career", "Learning"],
    content: `
## Why I Pursued CCNA

As an IT Officer managing infrastructure at Valentine Growers, I work with networks daily. But I wanted to deepen my understanding beyond troubleshooting—I wanted to **design and optimize** networks. The CCNA certification seemed like the perfect path.

## The Learning Journey

### Resources I Used

1. **Official Cisco CCNA Course** - Structured curriculum through Skillup with Levelup
2. **Packet Tracer** - Cisco's free network simulator
3. **Home Lab** - Real hardware for hands-on practice
4. **YouTube** - Jeremy's IT Lab, NetworkChuck

### Topics That Challenged Me

Some concepts took longer to grasp:

- **Subnetting** - Required lots of practice until it became second nature
- **STP (Spanning Tree Protocol)** - Understanding root bridge elections
- **OSPF** - Link-state routing was initially confusing vs. distance-vector
- **IPv6** - A completely different addressing mindset

## Theory vs. Practice

The CCNA curriculum is excellent, but there's a gap between memorizing concepts and implementing them. This is where my **home lab** became invaluable.

### Packet Tracer Limitations

While Packet Tracer is great for basic labs, it has limitations:
- Simplified device behavior
- Missing real-world quirks
- No performance testing
- Limited vendor options

### Real Hardware Benefits

Using my MikroTik RB5009UPr+S+IN for practice offered:
- **Real latency and performance characteristics**
- **Actual troubleshooting scenarios**
- **Experience with RouterOS** (different from IOS but concepts transfer)
- **Confidence** that comes from working with real equipment

## Key Takeaways

### What CCNA Taught Me

1. **OSI Model Mastery** - Understanding which layer a problem exists at speeds troubleshooting
2. **IP Addressing** - Subnetting is foundational to everything
3. **Routing Fundamentals** - How packets find their way across networks
4. **Switching Concepts** - VLANs, trunking, STP
5. **Network Security** - ACLs, port security, best practices

### How It Improved My Work

At Valentine Growers, I've applied CCNA knowledge to:
- Redesign the network with proper segmentation
- Implement better security practices
- Document the network properly
- Train colleagues on basic networking concepts

## Advice for CCNA Candidates

1. **Don't just read—lab it** - Every concept needs hands-on practice
2. **Build a home lab** - Even a simple one helps immensely
3. **Join communities** - Reddit's r/ccna, Discord servers
4. **Teach others** - Explaining concepts reinforces your understanding
5. **Be patient** - Some topics take time to click

## What's Next

CCNA is just the beginning. I'm considering:
- **CCNP Enterprise** - Deeper dive into enterprise networking
- **AWS Solutions Architect** - Cloud networking
- **Network automation** - Python for network engineers

The networking field is constantly evolving, and continuous learning is essential. My home lab will continue to be my testing ground for new technologies and concepts.
    `,
  },
];

export const categoryColors: Record<string, string> = {
  Networking: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Home Lab": "bg-green-500/10 text-green-400 border-green-500/20",
  AWS: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

export const getBlogPost = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};
