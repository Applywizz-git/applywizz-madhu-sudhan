import React from 'react';
import { Calendar, MapPin, TrendingUp, Shield, Database } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'American Airlines',
      role: 'Data Engineer',
      period: 'Feb 2023 – Present',
      location: 'Dallas, TX',
      highlights: [
        'Engineered real-time and batch data pipelines with Apache Spark, Flink, and Kafka, improving throughput by 35%',
        'Delivered high-availability ETL/ELT pipelines in Azure Data Factory and Databricks with 99.9% uptime',
        'Increased analytics queries speed by 40% in Snowflake and Synapse through partitioning strategies',
        'Reduced infrastructure provisioning times by 60% by automating deployment with Terraform',
        'Developed ML workflows with MLflow, TensorFlow, and PyTorch achieving 25% higher accuracy in flight delay prediction',
        'Enhanced interoperability by creating RESTful APIs aligned with FHIR and HL7 standards',
        'Accelerated release cycles by 95% through Jenkins and Azure DevOps pipelines',
        'Built executive-level Power BI dashboards for real-time KPIs and operational strategies'
      ],
      techStack: ['Apache Spark', 'Flink', 'Kafka', 'Azure Data Factory', 'Databricks', 'Snowflake', 'Synapse', 'Terraform'],
      side: 'right'
    },
    {
      company: 'Optum Health Care',
      role: 'Data Engineer',
      period: 'Mar 2020 – Aug 2021',
      location: 'Bangalore, India',
      highlights: [
        'Built large-scale pipelines in PySpark and Scala on Databricks to process petabyte-level claims data',
        'Cut batch runtimes by 30% and shortened ingestion time by 25% with Snowflake warehouse',
        'Improved reliability of EHR and claims processing with ADF and Synapse pipelines',
        'Strengthened fraud detection with real-time streaming using Azure Stream Analytics and Kafka',
        'Enhanced query responsiveness by tuning MySQL with indexing and partitioning',
        'Delivered compliance-ready visualizations in Tableau improving reporting accuracy by 30%',
        'Introduced automated data quality checks maintaining 99% accuracy across pipelines'
      ],
      techStack: ['PySpark', 'Scala', 'Databricks', 'Snowflake', 'Talend', 'Azure Data Factory', 'Synapse', 'Kafka'],
      side: 'left'
    },
    {
      company: 'Splunk',
      role: 'Data Analyst',
      period: 'May 2017 – Feb 2020',
      location: 'Hyderabad, India',
      highlights: [
        'Processed more than 10TB of daily log data building scalable ETL workflows in Informatica, NiFi, and Spark',
        'Migrated enterprise workloads from Teradata to GCP cutting query times by 20% and costs by 25%',
        'Enabled near real-time monitoring implementing data pipelines on AWS Glue, Lambda, Redshift, and EMR',
        'Unified data from Oracle, SQL Server, PostgreSQL, MongoDB into BigQuery creating single source of truth',
        'Shortened deployment cycles by 40% through CI/CD automation in Jenkins and Kubernetes',
        'Delivered actionable insights with Power BI dashboards enabling 25% faster incident resolution',
        'Raised confidence in reporting by introducing automated testing frameworks expanding validation coverage by 35%'
      ],
      techStack: ['Informatica', 'Apache NiFi', 'Spark', 'GCP', 'BigQuery', 'AWS Glue', 'Redshift', 'EMR'],
      side: 'right'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary opacity-30"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  exp.side === 'left' ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-primary rounded-full border-4 border-background z-10 animate-pulse-teal"></div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${exp.side === 'left' ? 'lg:pl-8' : 'lg:pr-8'}`}>
                  <div 
                    className={`glass-card p-8 rounded-2xl hover-glow animate-slide-in-${exp.side}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Company & Role */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {exp.role}
                      </h3>
                      <h4 className="text-xl text-primary font-semibold mb-3">
                        {exp.company}
                      </h4>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;