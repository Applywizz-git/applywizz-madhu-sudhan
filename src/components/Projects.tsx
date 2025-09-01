import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AirlineAnalyticsImg from '@/assets/Airline-Analytics.png';
import FlightoperationImg from '@/assets/Flight-Operation.png';
import cloudImg from '@/assets/cloud.png';
import healthcareImg from '@/assets/Health-Claims.png';
import healthriskImg from '@/assets/Health-Risk.png'; 
import cloudAnalyticsImg from '@/assets/Cloud-Analytics.png';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);


  const projects = [
    {
      title: 'Airline Ops Lakehouse & Streaming Analytics',
      description:
        'Built Spark/Flink/Kafka pipelines on Azure Databricks + ADF, sustaining 99.9% uptime for flight ops. Improved throughput ~35%, cut infra provisioning 60% with Terraform, and delivered exec KPIs via Power BI + Synapse. MLflow/TensorFlow models boosted delay forecast accuracy ~25%.',
      techStack: [
        'Spark', 'Flink', 'Kafka', 'Azure Data Factory', 'Databricks',
        'Snowflake', 'Synapse', 'Terraform', 'MLflow', 'TensorFlow', 'PyTorch', 'Power BI'
      ],
      image: AirlineAnalyticsImg,
      category: 'Airline Operations'
    },
    {
      title: 'Healthcare Claims & Risk Analytics Platform',
      description:
        'Delivered PySpark/Scala pipelines in Databricks (-30% batch runtime). Centralized STAR ratings in Snowflake via Talend+ADF. Kafka + Azure Stream Analytics reduced fraud detection latency ~40%. Tableau dashboards improved reporting accuracy ~30% for compliance teams.',
      techStack: [
        'Databricks', 'PySpark/Scala', 'Snowflake', 'Talend', 'ADF',
        'Synapse', 'Kafka', 'Azure Stream Analytics', 'Tableau'
      ],
      image: healthcareImg,
      category: 'Healthcare Analytics'
    },
    {
      title: 'Cloud Log Analytics Migration (Teradata → GCP)',
      description:
        'Migrated 10TB+/day logs from Teradata to BigQuery (–20% query time, –25% cost). Built ETL with NiFi/Informatica/Spark. Real-time pipelines on AWS Glue/Redshift/EMR reduced latency ~30%. Unified SQL/NoSQL data into BigQuery; Jenkins + K8s CI/CD cut release cycles 40%.',
      techStack: [
        'Informatica', 'NiFi', 'Spark', 'BigQuery', 'Dataflow', 'Cloud Composer',
        'AWS Glue', 'Lambda', 'Redshift', 'EMR', 'Jenkins', 'Kubernetes'
      ],
      image: cloudAnalyticsImg,
      category: 'Platform Analytics'
    },
    {
      title: 'Real-Time Flight Operations Data Platform',
      description:
        'Designed ADF + Kafka + Spark Streaming + Synapse ingestion with 99.9% uptime. Built Databricks Lakehouse combining batch/streaming with sub-second queries. Power BI dashboards + ML pipelines (MLflow, TensorFlow) improved flight delay predictions by 20%.',
      techStack: [
        'Azure Data Factory', 'Kafka', 'Spark Streaming', 'Databricks',
        'Synapse', 'Delta Lake', 'Power BI', 'MLflow', 'TensorFlow'
      ],
      image: FlightoperationImg,
      category: 'Airline Ops'
    },
    {
      title: 'Healthcare Risk Adjustment Analytics',
      description:
        'Created Snowflake warehouse with Talend + ADF centralizing claims/clinical data. Automated STAR ratings analysis with PySpark models (-30% reporting cycles). Tableau dashboards improved high-risk patient stratification and compliance accuracy by 25%.',
      techStack: ['Snowflake', 'Talend', 'ADF', 'PySpark', 'Tableau'],
      image: healthriskImg,
      category: 'Healthcare'
    },
    {
      title: 'Cloud Data Migration & Analytics',
      description:
        'Migrated 10TB+ datasets from Teradata → BigQuery via Composer/Dataflow (-25% cost). Real-time monitoring with AWS Glue/Kafka/Redshift accelerated incident response. Automated PyTest+SQL validations boosted dataset reliability by 35%.',
      techStack: ['BigQuery', 'Cloud Composer', 'Dataflow', 'AWS Glue', 'Kafka', 'Redshift', 'PyTest', 'SQL'],
      image: cloudImg,
      category: 'Cloud Migration'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of AML compliance, risk management, and data analytics projects
          </p>
        </div>

        {/* Main Project Display */}
        <div className="relative mb-12">
          <div className="glass-card rounded-3xl overflow-hidden hover-glow">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-80 lg:h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent lg:hidden"></div>
              </div>

              {/* Project Details */}
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                    {projects[currentProject].category}
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  {projects[currentProject].title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {projects[currentProject].description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[currentProject].techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            onClick={prevProject}
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card hover-glow"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={nextProject}
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card hover-glow"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Project Thumbnails */}
        <div className="flex justify-center gap-4 overflow-x-auto pb-4">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentProject
                  ? 'ring-2 ring-primary scale-110'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              title={`Go to project ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentProject ? 'bg-primary w-8' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
