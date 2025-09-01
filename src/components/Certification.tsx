import React, { useState } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certification = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  // UPDATED to match your resume's certifications
  const certifications = [
    {
      title: 'Microsoft Azure Data Engineer Associate (DP-203)',
      issuer: 'Microsoft',
      description:
        'Validated skills in designing and implementing data storage, processing, security, and monitoring solutions on Azure (ADF, Synapse, Databricks, ADLS).',
      skills: ['Azure', 'ADF/Synapse', 'Databricks', 'Security & Governance'],
      credentialId: 'DP-203',
      verifyLink: '#'
    },
    {
      title: 'Databricks Lakehouse Fundamentals',
      issuer: 'Databricks Academy',
      description:
        'Core Lakehouse concepts: Delta Lake, structured streaming, notebooks, and governance patterns for batch + real-time analytics.',
      skills: ['Delta Lake', 'Structured Streaming', 'Lakehouse'],
      credentialId: 'DB-LH-FUND',
      verifyLink: '#'
    },
    {
      title: 'Apache Spark Developer Associate',
      issuer: 'Databricks',
      description:
        'Hands-on proficiency building Spark jobs with PySpark/Scala, optimizing transformations, and troubleshooting jobs at scale.',
      skills: ['Apache Spark', 'PySpark/Scala', 'Optimization'],
      credentialId: 'SPARK-ASSOC',
      verifyLink: '#'
    },
    {
      title: 'Google Cloud Professional Data Engineer',
      issuer: 'Coursera',
      description:
        'Designs, builds, and operationalizes data processing systems on GCP (BigQuery, Dataflow, Pub/Sub), emphasizing reliability, security, and scalability.',
      skills: ['BigQuery', 'Dataflow', 'Pub/Sub', 'GCP Security'],
      credentialId: 'GCP-PDE',
      verifyLink: '#'
    },
    {
      title: 'IBM Data Engineering Professional Certificate',
      issuer: 'Coursera',
      description:
        'End-to-end DE specialization covering SQL, ETL/ELT, data modeling, and pipeline orchestration with Python/Spark.',
      skills: ['SQL', 'ETL/ELT', 'Data Modeling', 'Python/Spark'],
      credentialId: 'IBM-DE-PRO',
      verifyLink: '#'
    },
    {
      title: 'Data Engineering with Python',
      issuer: 'DataCamp',
      description:
        'Practical data engineering in Python: building pipelines, validation, and performance tuning with Pandas, SQL, and PySpark.',
      skills: ['Python', 'Pandas/SQL', 'PySpark', 'Validation'],
      credentialId: 'DC-DE-PY',
      verifyLink: '#'
    }
  ];

  const handleCardFlip = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section id="certification" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-4"></div>
          {/* UPDATED subtitle text only; UI unchanged */}
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in data engineering,
            cloud platforms, streaming, and analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative h-80 cursor-pointer"
              onClick={() => handleCardFlip(index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-gpu ${flippedCard === index ? 'rotate-y-180' : ''}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of Card */}
                <div
                  className="absolute inset-0 glass-card p-6 rounded-2xl hover-glow flex flex-col justify-between"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                        <Award className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-4 leading-tight">
                      {cert.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.slice(0, 2).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 2 && (
                        <span className="px-2 py-1 bg-muted/20 text-muted-foreground rounded text-xs">
                          +{cert.skills.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <div className="text-xs text-muted-foreground mb-2">Click to view details</div>
                    <div className="w-8 h-0.5 bg-gradient-primary mx-auto"></div>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className="absolute inset-0 glass-card p-6 rounded-2xl hover-glow transform rotate-y-180 flex flex-col justify-between"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {cert.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Credential ID:</span> {cert.credentialId}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Issuer:</span> {cert.issuer}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
