import React, { useEffect, useState } from 'react';
import { Code, Database, Shield, Wrench } from 'lucide-react';

const Skills = () => {
  const [progressStarted, setProgressStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !progressStarted) {
          setProgressStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsElement = document.getElementById('skills');
    if (skillsElement) observer.observe(skillsElement);

    return () => observer.disconnect();
  }, [progressStarted]);

  // UPDATED: categories aligned to the resume
  const skillCategories = [
    {
      category: 'Data Engineering',
      icon: Code,
      skills: [
        { name: 'Apache Spark (PySpark)', level: 92 },
        { name: 'Kafka (Streams/Connect)', level: 88 },
        { name: 'Databricks (Delta Lake)', level: 90 },
        { name: 'dbt (ELT & tests)', level: 85 },
      ],
      color: 'from-primary to-accent'
    },
    {
      category: 'Cloud & Platforms',
      icon: Database,
      skills: [
        { name: 'Azure (ADF/Synapse/ADLS)', level: 90 },
        { name: 'AWS (S3/Glue/EMR)', level: 82 },
        { name: 'GCP (BigQuery/Dataflow)', level: 78 },
        { name: 'Snowflake (Warehousing)', level: 85 },
      ],
      color: 'from-accent to-success'
    },
    {
      category: 'Security & Governance',
      icon: Shield,
      skills: [
        { name: 'RBAC / KMS / Private Endpoints', level: 90 },
        { name: 'PII • GDPR • SOC 2', level: 85 },
        { name: 'Data Quality & Lineage', level: 88 },
        { name: 'Cost Governance / FinOps', level: 82 },
      ],
      color: 'from-success to-primary'
    },
    {
      category: 'Orchestration & DevOps',
      icon: Wrench,
      skills: [
        { name: 'Airflow (schedulers/sensors)', level: 88 },
        { name: 'MLflow (tracking/registry)', level: 82 },
        { name: 'CI/CD (GitHub/Jenkins)', level: 82 },
        { name: 'Docker / Kubernetes', level: 80 },
      ],
      color: 'from-primary to-success'
    }
  ];

  // UPDATED: top skills aligned to resume focus
  const topSkills = [
    { name: 'SQL', percentage: 95, color: 'primary' },
    { name: 'Apache Spark', percentage: 92, color: 'accent' },
    { name: 'Databricks', percentage: 90, color: 'success' },
    { name: 'Airflow', percentage: 88, color: 'primary' }
  ];

  const ProgressRing = ({ percentage, color, delay = 0 }) => {
    const radius = 40;
    const strokeWidth = 8;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = progressStarted 
      ? circumference - (percentage / 100) * circumference 
      : circumference;

    return (
      <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          stroke="hsl(var(--border))"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress circle */}
        <circle
          stroke={`hsl(var(--${color}))`}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          style={{
            strokeDashoffset,
            transition: `stroke-dashoffset 2s ease-in-out ${delay}s`,
            strokeLinecap: 'round'
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
    );
  };

  const ProgressBar = ({ level, color, delay = 0 }) => (
    <div className="w-full bg-border rounded-full h-2 overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
        style={{
          width: progressStarted ? `${level}%` : '0%',
          transitionDelay: `${delay}s`
        }}
      />
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-4"></div>
          {/* UPDATED: summary line only, UI unchanged */}
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise in data engineering, streaming, and lakehouse architecture across Azure, AWS, and GCP.
          </p>
        </div>

        {/* Top Skills with Progress Rings */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {topSkills.map((skill, index) => (
            <div
              key={index}
              className="text-center glass-card p-6 rounded-2xl hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative inline-block mb-4">
                <ProgressRing 
                  percentage={skill.percentage} 
                  color={skill.color}
                  delay={index * 0.2}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold gradient-text">
                    {skill.percentage}%
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="glass-card p-8 rounded-2xl hover-glow"
              style={{ animationDelay: `${catIndex * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <ProgressBar 
                      level={skill.level} 
                      color={category.color}
                      delay={catIndex * 0.2 + skillIndex * 0.1}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Additional <span className="gradient-text">Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Delta Lake', 'Unity Catalog', 'MLflow', 'Airflow Sensors',
              'dbt Tests', 'Terraform', 'Docker', 'Kubernetes',
              'GitHub Actions / Jenkins', 'CDC', 'SCD Type 2',
              'Z-ORDER / OPTIMIZE', 'Synapse Serverless', 'Delta Live Tables'
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
