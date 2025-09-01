import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Science in Business Analytics',
      institution: 'The University of Texas at Dallas',
      location: 'Dallas, TX, USA',
      year: 'Aug 2021 – Dec 2023',
      description:
        'Graduate program focused on data engineering & analytics—covering big data systems, cloud data platforms, advanced SQL, and visualization for decision-making.',
      achievements: [
        'Projects using Spark/Databricks, Snowflake/Synapse, and Azure/GCP stacks',
        'Advanced analytics & data warehousing with Power BI/Tableau',
        'Emphasis on secure, compliant data pipelines (GDPR/SOC 2 concepts)'
      ],
      logo: '🎓'
    },
    {
      degree: 'Bachelor of Technology in Mechanical Engineering',
      institution: 'Jawaharlal Nehru Technological University',
      location: 'Hyderabad, India',
      year: 'Sep 2013 – May 2017',
      description:
        'Strong quantitative foundation with systems thinking and process optimization; built analytical problem-solving skills applicable to large-scale data systems.',
      achievements: [
        'Leadership roles in technical activities',
        'Process optimization & analytical projects',
        'Team collaboration on engineering design work'
      ],
      logo: '⚙️'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Education & <span className="gradient-text">Academic Background</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-4"></div>
          {/* subtitle aligned to resume focus */}
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation supporting expertise in data engineering, analytics, and cloud platforms
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-3xl hover-glow animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="grid lg:grid-cols-4 gap-8 items-center">
                {/* Institution Logo/Icon */}
                <div className="lg:col-span-1 flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-4xl animate-pulse-teal">
                      {edu.logo}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-accent-foreground" />
                    </div>
                  </div>
                </div>

                {/* Education Details */}
                <div className="lg:col-span-3">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-xl text-primary font-semibold mb-3">
                      {edu.institution}
                    </h4>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-foreground font-semibold">Key Achievements</span>
                    </div>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Academic Information */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Academic <span className="gradient-text">Excellence</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A blend of analytics, engineering fundamentals, and systems thinking—supporting scalable,
              secure data solutions and clear business impact.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-8 h-8 text-background" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Technical Foundation</h4>
                <p className="text-sm text-muted-foreground">
                  Strong analytical & problem-solving skills
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-success rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-background" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Data & Systems</h4>
                <p className="text-sm text-muted-foreground">
                  Data engineering, warehousing & security
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-success to-primary rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-8 h-8 text-background" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Global Perspective</h4>
                <p className="text-sm text-muted-foreground">
                  International education & domain breadth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
