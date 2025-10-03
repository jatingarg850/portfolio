// Debug script to test skills deletion
// Run this in the browser console while logged into the admin panel

async function testSkillsAPI() {
  console.log('Testing Skills API...');
  
  try {
    // First, get all skills
    console.log('1. Fetching skills...');
    const skillsResponse = await fetch('/api/skills');
    const skillsData = await skillsResponse.json();
    console.log('Skills response:', skillsData);
    
    if (skillsData.success && skillsData.data.length > 0) {
      const firstSkill = skillsData.data[0];
      console.log('2. Testing DELETE on skill:', firstSkill.name, 'ID:', firstSkill._id);
      
      // Test DELETE request
      const deleteResponse = await fetch(`/api/skills/${firstSkill._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      console.log('Delete response status:', deleteResponse.status);
      console.log('Delete response headers:', Object.fromEntries(deleteResponse.headers.entries()));
      
      const deleteData = await deleteResponse.json();
      console.log('Delete response data:', deleteData);
      
      if (deleteResponse.ok) {
        console.log('✅ DELETE request successful');
      } else {
        console.log('❌ DELETE request failed');
      }
    } else {
      console.log('No skills found to test deletion');
    }
  } catch (error) {
    console.error('Error testing skills API:', error);
  }
}

// Run the test
testSkillsAPI();