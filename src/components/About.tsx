import React, { useEffect, useState } from 'react';
import { Shield, TrendingUp, Database, Cog } from 'lucide-react';

const About = () => {
  const [countersStarted, setCountersStarted] = useState(false);
  const [projectCount, setProjectCount] = useState(0);
  const [yearCount, setYearCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersStarted) {
          setCountersStarted(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    const aboutElement = document.getElementById('about');
    if (aboutElement) observer.observe(aboutElement);

    return () => observer.disconnect();
  }, [countersStarted]);

  const animateCounters = () => {
    // Projects counter
    let projects = 0;
    const projectInterval = setInterval(() => {
      projects++;
      setProjectCount(projects);
      if (projects >= 10) clearInterval(projectInterval);
    }, 100);

    // Years counter
    let years = 0;
    const yearsInterval = setInterval(() => {
      years += 0.1;
      setYearCount(Math.round(years * 10) / 10);
      if (years >= 6) clearInterval(yearsInterval);
    }, 50);

    // Satisfaction counter
    let satisfaction = 0;
    const satisfactionInterval = setInterval(() => {
      satisfaction += 2;
      setSatisfactionCount(satisfaction);
      if (satisfaction >= 100) clearInterval(satisfactionInterval);
    }, 30);
  };

  const highlights = [
    {
      icon: Shield,
      title: 'Real-time Data Processing',
      description: 'Apache Spark, Kafka, and Flink for streaming analytics'
    },
    {
      icon: TrendingUp,
      title: 'Cloud Data Platforms',
      description: 'AWS, Azure, and GCP enterprise data solutions'
    },
    {
      icon: Database,
      title: 'Data Warehousing',
      description: 'Snowflake, Redshift, BigQuery optimization'
    },
    {
      icon: Cog,
      title: 'ETL/ELT Automation',
      description: 'Databricks, dbt, and Airflow orchestration'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* About Content */}
          <div className="animate-slide-in-left">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Results-driven Data Engineer with 6+ years of experience architecting and optimizing 
              enterprise-scale data platforms across airline, healthcare, and technology domains. 
              Skilled in developing real-time and batch pipelines using Spark, Kafka, Flink, Databricks, 
              Airflow, and dbt, delivering cloud-native solutions on AWS, Azure, and GCP.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Proven success in large-scale data migrations, advanced SQL tuning, and ETL/ELT orchestration, 
              achieving 30-40% faster processing and 20-25% cost savings. Experienced in MLOps, DataOps, 
              CI/CD, and ensuring secure, automated, and compliant pipelines aligned with HIPAA, GDPR, and SOC2.
            </p>
          </div>

          {/* Animated Counters */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center glass-card p-6 rounded-2xl hover-glow">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {projectCount}+
                </div>
                <div className="text-muted-foreground">Projects</div>
              </div>
              <div className="text-center glass-card p-6 rounded-2xl hover-glow">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {yearCount}+
                </div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center glass-card p-6 rounded-2xl hover-glow">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {satisfactionCount}%
                </div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl text-center hover-glow group transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {highlight.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;