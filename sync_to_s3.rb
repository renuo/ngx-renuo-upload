branch = ENV['BRANCH']
appname = ENV['APPNAME']
usage = 'Use it like `BRANCH=<branch> APPNAME=<appname> ruby sync_to_s3.rb`'
abort "APPNAME not set! #{usage}" if appname.nil? || appname.empty?
abort "BRANCH not set! #{usage}" if branch.nil? || branch.empty?

def run(command)
  puts "running #{command}"
  puts `#{command}`
end

# Credentials to s3 are stored at the deployment-server in the ~/.aws (e.g. generate-init-s3-project-script.rb)
base_command = "aws s3 sync dist s3://#{appname}-#{branch} --profile #{appname}-#{branch} --acl public-read"

run "#{base_command} --exclude '*' --include '*.woff' --delete --content-type 'application/font-woff'"
run "#{base_command} --exclude '*' --include '*.woff2' --delete --content-type 'application/font-woff2'"
run "#{base_command} --exclude '*' --include '*.js' --cache-control max-age=864000"
run "#{base_command} --exclude '*' --include '*.map' --cache-control max-age=864000"
run "#{base_command} --exclude '*' --include 'index.html' --cache-control max-age=0"
run "#{base_command} --exclude '*.woff' --exclude '*.woff2' --delete --cache-control max-age=120"
